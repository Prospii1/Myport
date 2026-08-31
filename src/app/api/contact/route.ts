import { NextRequest, NextResponse } from "next/server";

// Placeholder persistence layer. Replace with a Supabase insert into
// `contact_submissions` (status defaulting to "new") once the CMS phase
// is wired up — the request contract below is already CMS-ready.
export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const submission = {
    name,
    email,
    company: String(body.company ?? ""),
    projectType: String(body.projectType ?? ""),
    budget: String(body.budget ?? ""),
    timeline: String(body.timeline ?? ""),
    message,
    submittedAt: new Date().toISOString(),
    status: "new" as const,
  };

  // TODO(CMS phase): persist `submission` to Supabase `contact_submissions`
  // and notify the admin (email/webhook).
  console.log("[contact submission]", submission);

  return NextResponse.json({ ok: true });
}
