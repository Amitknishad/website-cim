// https://github.com/Amitknishad/om-birla-dot-in/blob/desktop9feb2023/pages/api/auth/index.js
import { NextResponse } from "next/server";
export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request) {
    try {                
        return NextResponse.json({ message: `${request.nextUrl} working..!` }, { status: 200 }); 
    } catch (error) {
        return NextResponse.json({ "status" : "Error", message: `${error?.message}` }, { status: 400 });
    }
}