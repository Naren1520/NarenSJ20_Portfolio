interface ContactEmailPayload {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(
  payload: ContactEmailPayload
): Promise<{ ok: true }> {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const recipientEmail = process.env.BREVO_RECIPIENT_EMAIL;

  if (!apiKey || !senderEmail || !recipientEmail) {
    throw new Error("Email service is not configured.");
  }

  const body = {
    sender: { name: payload.name, email: senderEmail },
    to: [{ email: recipientEmail }],
    replyTo: { email: payload.email },
    subject: `Portfolio contact from ${payload.name}`,
    textContent: payload.message,
  };

  let response: Response;
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    clearTimeout(timeout);
  } catch (err: unknown) {
    if (err instanceof Error && err.name === "AbortError") {
      throw new Error("Connection timed out. Please try again.");
    }
    throw new Error("Connection timed out. Please try again.");
  }

  if (response.ok) {
    return { ok: true };
  }

  if (response.status >= 400 && response.status < 500) {
    throw new Error("Could not send your message. Please try again.");
  }

  throw new Error("Service temporarily unavailable. Please try later.");
}
