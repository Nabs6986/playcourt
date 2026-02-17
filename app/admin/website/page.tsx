import Link from "next/link";
import { Globe, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function AdminWebsitePage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-slate-900">Website Preview</h1>
        <p className="mt-1 text-sm text-slate-500">
          Template-based member website is rendered from club profile and media.
        </p>
      </div>

      <Card>
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-500">
            <Globe className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h2 className="text-base font-semibold text-slate-900">Demo Club</h2>
            <p className="mt-1 text-sm text-slate-500">
              Preview the public-facing club page using the seeded demo data.
            </p>
            <Link href="/club/demo-club" className="mt-4 inline-block">
              <Button variant="secondary" size="sm">
                <ExternalLink className="h-4 w-4" />
                Open Preview
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
