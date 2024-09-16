// middleware.js
// https://nextjs.org/docs/app/building-your-application/routing/middleware

import { NextResponse } from 'next/server';

export async function middleware(req) {
  console.log(`middleware => req.url : ${req.url}`);
  // Continue to the next middleware or route if authenticated
  return NextResponse.next();
}

// Define which paths should be affected by the middleware
export const config = {
  // matcher allows you to filter Middleware to run on specific paths.
  // matcher: '/about/:path*',
  // matcher: ['/about/:path*', '/dashboard/:path*'],
  matcher: [ '/((?!api|_next/static|_next/image|favicon.ico).*)' ], // Define your protected paths here
};