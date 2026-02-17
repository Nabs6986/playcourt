export type AppRole = "admin" | "member";

export type TenantContext = {
  host: string;
  isAdminHost: boolean;
  clubSlug: string | null;
};
