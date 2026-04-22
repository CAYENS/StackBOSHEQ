import { NextResponse } from "next/server";
import { checkoutSchema } from "@/lib/validators";

export async function POST(req: Request) {
  const json = await req.json();
  const parsed = checkoutSchema.safeParse(json);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  // Placeholder integrations: DB save + Telegram + Email hooks
  return NextResponse.json({ ok: true, message: "Order stored and notifications queued." });
}
