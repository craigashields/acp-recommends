import { createClient } from "@supabase/supabase-js";

export async function GET(request: Request) {
  // Only allow requests from our Vercel cron
  const authHeader = request.headers.get("authorization");

  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );

  const { error } = await supabase
    .from("acp_recommendsv2")
    .select("*")
    .limit(1);

  if (error) {
    console.error("Supabase keep-alive failed:", error);
    return Response.json({ ok: false, error: error.message }, { status: 500 });
  }

  return Response.json({
    ok: true,
    timestamp: new Date().toISOString(),
  });
}
