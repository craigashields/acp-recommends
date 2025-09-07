// pages/api/revalidate.js
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  try {
    const url = new URL(req.url);
    const token = url.searchParams.get("secret");

    if (!token || token !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    await revalidatePath("/");

    return NextResponse.json({ message: "Revalidation successful" });
  } catch (error) {
    console.error("Error revalidating path:", error);
    return NextResponse.json(
      { error: "Failed to revalidate path" },
      { status: 500 }
    );
  }
}
