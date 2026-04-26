import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  if (!email || !password || password.length < 6) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return NextResponse.json({ error: "User already exists" }, { status: 409 });

  const hash = await bcrypt.hash(password, 10);
  await prisma.user.create({ data: { email, password: hash, role: "customer" } });
  return NextResponse.json({ ok: true });
}
