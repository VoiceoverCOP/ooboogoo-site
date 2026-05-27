import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const hostname = request.headers.get("host") ?? "";

  if (hostname.includes("shapmediagroup.com") || hostname.includes("shapmediagroup.ca")) {
    return NextResponse.redirect("https://ooboogoo.com/shap-media", {
      status: 301,
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
