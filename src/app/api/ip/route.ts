import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // Extract the 'x-forwarded-for' header
  const forwardedFor = req.headers.get("x-forwarded-for");
  // Split to handle multiple proxies
  const ip = forwardedFor?.split(",")[0] || "Unknown IP";

  // Return the response as a JSON object
  return NextResponse.json({ ip });
}
