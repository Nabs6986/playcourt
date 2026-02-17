import { NextRequest, NextResponse } from "next/server";

const ADMIN_PREFIX = "admin.";

function stripPort(host: string) {
  return host.split(":")[0] ?? host;
}

export function middleware(req: NextRequest) {
  const host = stripPort(req.headers.get("host") ?? "");
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".")) {
    return NextResponse.next();
  }

  const baseDomain = process.env.BASE_DOMAIN ?? "example.com";

  if (host.startsWith(ADMIN_PREFIX)) {
    if (!pathname.startsWith("/admin")) {
      const url = req.nextUrl.clone();
      url.pathname = `/admin${pathname === "/" ? "" : pathname}`;
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  }

  if (host.endsWith(`.${baseDomain}`) && host !== baseDomain) {
    const slug = host.replace(`.${baseDomain}`, "");
    if (!pathname.startsWith("/club/")) {
      const url = req.nextUrl.clone();
      url.pathname = `/club/${slug}${pathname === "/" ? "" : pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"]
};
