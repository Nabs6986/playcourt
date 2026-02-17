import { db } from "@/lib/db";
import { badRequest, ok, serverError } from "@/lib/http";

function parseCsv(csv: string) {
  const lines = csv.trim().split(/\r?\n/);
  if (lines.length < 2) return [];

  const rows = lines.slice(1).map((line) => {
    const [name, email, phone] = line.split(",").map((x) => x?.trim() ?? "");
    return { name, email, phone };
  });

  return rows.filter((row) => row.email && row.name);
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const clubId = formData.get("clubId")?.toString();
    const file = formData.get("file");

    if (!clubId || !(file instanceof File)) {
      return badRequest("clubId and CSV file are required");
    }

    const csv = await file.text();
    const rows = parseCsv(csv);

    let createdCount = 0;
    for (const row of rows) {
      try {
        await db.member.create({
          data: {
            clubId,
            name: row.name,
            email: row.email.toLowerCase(),
            phone: row.phone || null,
            role: "member"
          }
        });
        createdCount += 1;
      } catch {
        // Ignore duplicate row errors and continue.
      }
    }

    return ok({ imported: rows.length, created: createdCount });
  } catch (error) {
    return serverError("Unable to import members", String(error));
  }
}
