// https://nextjs.org/docs/app/building-your-application/routing/route-handlers

// app/page.js	&& app/route.js	=>  Conflict
// app/page.js	&& app//api/route.js	=>  Valid
// app/[user]/page.js && app/api/route.js =>  Valid

import { NextResponse } from "next/server";
export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(request) {
    // request.nextUrl => http://localhost:3000/api/search?query=hello
    return NextResponse.json({ message: `${request.nextUrl} working` }, { status: 200 });
    // {"message":"http://localhost:3000/api/search?query=hello working"}
}