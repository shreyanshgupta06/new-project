import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, company, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  console.log("Contact submission", { name, email, company, message });

  return NextResponse.json({ success: true });
}
