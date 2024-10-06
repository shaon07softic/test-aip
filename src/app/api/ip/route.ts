import { NextResponse } from "next/server";

export async function GET(req: Request) {
  // Extract the 'x-forwarded-for' header
  const forwardedFor = req.headers.get("x-forwarded-for");
  // Split to handle cases where multiple proxies are used
  const ip = forwardedFor?.split(",")[0] || "Unknown IP";

  return NextResponse.json({ msg: `Hello from server x ${ip}` });
}
