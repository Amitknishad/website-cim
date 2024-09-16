// middleware.js

// https://next-auth.js.org/configuration/nextjs
// The most simple usage is when you want to require authentication for your entire site. You can add a middleware.js file with the following:

import { NextResponse } from 'next/server';

// The middleware function will only be invoked if the authorized callback returns true.
// export { default } from "next-auth/middleware"

export async function middleware(req) {
  return NextResponse.next();
}

// If you only want to secure certain pages, export a config object with a matcher:
// export const config = { matcher: ["/oms"] }


