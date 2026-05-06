import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const expected = `Bearer ${process.env.REVALIDATE_TOKEN ?? ""}`;
  if (!process.env.REVALIDATE_TOKEN || authHeader !== expected) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  revalidatePath("/");
  revalidatePath("/news");
  return NextResponse.json({ ok: true });
}
