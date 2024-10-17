// https://nextjs.org/docs/app/building-your-application/routing/route-handlers

// app/page.js	&& app/route.js	=>  Conflict
// app/page.js	&& app//api/route.js	=>  Valid
// app/[user]/page.js && app/api/route.js =>  Valid

// https://nextjs.org/docs/app/api-reference/functions/next-response
import { NextResponse } from "next/server";

import { cookies, headers  } from 'next/headers';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(request) {

    // redirect('https://nextjs.org/');

    // const searchParams = request.nextUrl.searchParams; // request.nextUrl.pathname
    // const query = searchParams.get('query');  // query is "hello" for /api/search?query=hello

    // const res = await request.json();
    // return NextResponse.json({ res });

    // const formData = await request.formData();
    // const name = formData.get('name');    
    
    // const token = request.cookies.get('token');
    // const requestHeaders = new Headers(request.headers);
    
    // const cookieStore = cookies();
    // const token = cookieStore.get('token');

    // const headersList = headers();
    // const referer = headersList.get('referer');

    return NextResponse.json({ message: "/api working" }, { status: 200, headers: { 'Content-Type': 'application/json'} });
}

export async function POST(request) {}
export async function PUT(request) {}

export async function DELETE(request) {}
export async function HEAD(request) {}
export async function PATCH(request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request) {}