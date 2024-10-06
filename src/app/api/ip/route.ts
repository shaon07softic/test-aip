import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import requestIp from "request-ip";

export async function GET(request: NextApiRequest) {
  const detectedIp = requestIp.getClientIp(request);
  let ipAddress = request.headers["x-real-ip"] as string;

  const forwardedFor = request.headers["x-forwarded-for"] as string;
  if (!ipAddress && forwardedFor) {
    ipAddress = forwardedFor?.split(",").at(0) ?? "Unknown";
  }

  console.table({ detectedIp, ipAddress });

  return NextResponse.json({ msg: "Hello from server x " + detectedIp + " " + ipAddress });
}
