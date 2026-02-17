import { badRequest, ok, serverError } from "@/lib/http";
import { getSupabaseClient } from "@/lib/auth/supabase";

export async function POST(req: Request) {
  try {
    const { email, redirectTo } = (await req.json()) as {
      email?: string;
      redirectTo?: string;
    };

    if (!email) {
      return badRequest("email is required");
    }

    const supabase = getSupabaseClient();
    if (!supabase) {
      return serverError("Supabase is not configured");
    }

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirectTo
      }
    });

    if (error) {
      return badRequest(error.message);
    }

    return ok({ sent: true });
  } catch (error) {
    return serverError("Unable to send magic link", String(error));
  }
}
