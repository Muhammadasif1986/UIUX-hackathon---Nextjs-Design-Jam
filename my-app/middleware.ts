// middleware.ts
import { authMiddleware } from "@clerk/nextjs"; // 👈 `clerkMiddleware` ki jagah `authMiddleware` use karein
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/", "/sign-in", "/sign-up"], // 👈 Public routes ko yahan define karein
  afterAuth(auth, req) {
    if (!auth.userId && !auth.isPublicRoute) {
      return NextResponse.redirect(new URL("/sign-in", req.url)); // 👈 Unauthorized users ko redirect karein
    }
    return NextResponse.next();
  },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
