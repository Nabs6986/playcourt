import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;

export function getSupabaseClient() {
  if (!url || !anon) {
    return null;
  }
  return createClient(url, anon);
}

export function getSupabaseServiceClient() {
  if (!url || !serviceRole) {
    return null;
  }
  return createClient(url, serviceRole);
}
