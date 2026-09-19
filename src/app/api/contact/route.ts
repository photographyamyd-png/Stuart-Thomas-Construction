import { NextResponse } from "next/server";
import { sendContactEmail, validateContactInput } from "@/lib/contact-email";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const validated = validateContactInput(body);
  if (validated.errors || !validated.data) {
    return NextResponse.json(
      { ok: false, error: "Please fix the highlighted fields.", errors: validated.errors },
      { status: 400 },
    );
  }

  const result = await sendContactEmail(validated.data);
  if (!result.ok) {
    return NextResponse.json({ ok: false, error: result.error }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
