import NextAuth from "next-auth";
import { DEFAULT_LOGIN_REDIRECT, authPrefix, authRoutes, protectedRoutes, publicRoutes } from "./routes";
import authConfig from "./auth.config";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(authPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isProtectedRoute = protectedRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    console.log('Api Auth');
    return null;
  }

  if (isAuthRoute) {
    console.log('Auth');
    if (isLoggedIn) return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    return null;
  }
  
  if (!isLoggedIn && isProtectedRoute) {
    console.log('Protected');
    return Response.redirect(new URL('/auth/login', nextUrl));
  }
  
  return null;
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"]
}