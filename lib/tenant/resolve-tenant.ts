import { headers } from "next/headers";
import type { TenantContext } from "@/lib/types";

export function resolveTenantFromHost(hostInput?: string): TenantContext {
  const host = (hostInput ?? "").split(":")[0] ?? "";
  const baseDomain = process.env.BASE_DOMAIN ?? "example.com";
  const isAdminHost = host.startsWith("admin.");

  if (isAdminHost) {
    return { host, isAdminHost: true, clubSlug: null };
  }

  if (host.endsWith(`.${baseDomain}`) && host !== baseDomain) {
    return {
      host,
      isAdminHost: false,
      clubSlug: host.replace(`.${baseDomain}`, "")
    };
  }

  return { host, isAdminHost: false, clubSlug: null };
}

export function resolveTenantFromRequestHeaders() {
  const h = headers();
  return resolveTenantFromHost(h.get("host") ?? "");
}
