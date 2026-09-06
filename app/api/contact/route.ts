import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/brevo";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

function isValidEmail(s: string): boolean {
  return /^\S+@\S+\.\S+$/.test(s);
}

export async function POST(request: NextRequest) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  const { name, email, message } = payload;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  try {
    await sendContactEmail({ name: name.trim(), email: email.trim(), message: message.trim() });
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Service temporarily unavailable. Please try later.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
