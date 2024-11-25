import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const unprotectedPaths = ['sign-in', 'sign-up']

export function middleware(request: NextRequest) {
  const JWTFromCookies = request.cookies.get('token') 

  if (!unprotectedPaths.some((path) => request.url.includes(path))) {
    if (!JWTFromCookies) {
      return NextResponse.redirect(new URL('/sign-in', request.url));
    } 
  } else {
    if (JWTFromCookies) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  const response = NextResponse.next();

  // if (JWTFromCookies?.value) {
  //   response.cookies.set('Authorization', `Bearer\ ${JWTFromCookies.value}`)

  // } 

  return response
}

export const config = {
  matcher: [
    // match all routes except static files and APIs
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};