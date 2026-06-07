import "server-only";
import { createClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  throw new Error(
    "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables for server client."
  );
}

export const supabaseAdmin = createClient(url, serviceKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
  global: {
    // Opt every Supabase GET request out of Next.js's Data Cache.
    // We use unstable_cache explicitly where caching is wanted (getComics,
    // getFilterOptions), so bypassing it here is always safe.
    fetch: (input, init) => fetch(input, { ...init, cache: "no-store" }),
  },
});

