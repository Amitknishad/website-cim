const API_SERVER = process.env.API_SERVER_SQL
import { NextResponse } from "next/server";
// Setting Cookies
// To set cookies, you can use the Response object in your API routes or the setCookie function from the next/headers package in your components or pages.

import { cookies } from 'next/headers';

async function fetchUserInfo(request, phoneNumber) {
    try {
        // console.log(`fetchUserInfo => request.method : ${request.method}`); 
        // console.log(`fetchUserInfo => request.nextUrl.pathname : ${request.nextUrl.pathname}`); // =>  /api/cookies
        const requestOptions = {
            method : "GET",
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.NEXTAUTH_SECRET_NEW}`}, // , ...authHeader(url) 
            // headers : { Authorization: `Bearer ${token}` }
        };

        // let searchParams = request?.nextUrl?.searchParams; // => path=user
        // let path = searchParams.get('path')
        // console.log(`fetchUserInfo => searchParams.path : ${path}`); 

        phoneNumber = phoneNumber.slice(-10);

        let apiURL = `${API_SERVER}/api/withsecret/sangathan/${phoneNumber}`; // http://localhost:8888/api/withsecret/sangathan/9451241372
        // console.log(`fetchUserInfo => apiURL : ${apiURL}`); 
        let apiResponse = await fetch(apiURL, requestOptions);
        let jsonResponse = await apiResponse.json();
        // console.log(`fetchUserInfo => jsonResponse : ${JSON.stringify(jsonResponse)}`); 
        return jsonResponse?.response;
    } catch (error) {
        console.log(`fetchUserInfo => error : ${error?.message}`); 
        return null;
    }
}

async function setCookie(request, requestBody) {
    try {     
        const { cookieName, cookieValue } = requestBody; // { name: 'phoneNumber', value: phoneNumber }
        // console.log(`setCookie => cookieName : ${cookieName}`);
        // Determine if the request is secure (HTTPS)
        const isSecure = request.headers.get('X-Forwarded-Proto') === 'https';
        // const cookieAttributes = `Path=/; HttpOnly; SameSite=Strict${isSecure ? '; Secure' : ''}`;
        // let response =  new Response(JSON.stringify({ "status" : "Success", message: 'Cookie set' }), { status: 200,
        //     headers: { 'Set-Cookie': `${name}=${value}; ${cookieAttributes}` },
        // });

        let dbData = null;
        
        if(cookieValue && cookieValue?.length > 10 ){
            dbData = await fetchUserInfo(request, cookieValue);
            // console.log(`\n\nsetCookie => dbData : ${JSON.stringify(dbData)}`); 
            if( !dbData || !dbData?.IS_ACTIVE ) dbData = null;
        }

        // Create a new response
        const response = NextResponse.json({ "status" : "Success", response : dbData, message: 'Cookie set successfully!' });

        if(dbData) {
            // Set the cookie
            response.cookies.set("A_FIELD", dbData?.A_FIELD, { // +918787080394 => %2B918787080394
                maxAge: 30* 60 * 60 * 24, // 30 day
                httpOnly: isSecure,
                secure: isSecure,
                sameSite: 'strict',
                path: '/',
            });
        }

        // Set the cookie
        response.cookies.set(cookieName, cookieValue, { // +918787080394 => %2B918787080394
            maxAge: 30* 60 * 60 * 24, // 30 day
            httpOnly: isSecure,
            secure: isSecure,
            sameSite: 'strict',
            path: '/',
        });

        return response;

    } catch (error) {
        console.log(`setCookie => error : ${error?.message}`);
        return NextResponse.json({ "status" : "Error", message: `${error?.message}` }, { status: 400 });
    }
}

export async function POST(request) {
    try {
        const cookieStore = cookies();
        const idToken = cookieStore.get('phoneNumber'); // idToken
        // console.log(`/api/cookies => idToken : ${JSON.stringify(idToken)}`); // {"name":"phoneNumber","value":"+918787080394","path":"/"}
        // { 
        // "name":"idToken",
        // "value":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjhkOWJlZmQzZWZmY2JiYzgyYzgzYWQwYzk3MmM4ZWE5NzhmNmYxMzciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vaHNvbWJpcmxhIiwiYXVkIjoiaHNvbWJpcmxhIiwiYXV0aF90aW1lIjoxNzI5MDYwNjc2LCJ1c2VyX2lkIjoiWHBtRlZGT0F2QmRTU1dRQ0lIY2hVSTFDNWMwMyIsInN1YiI6IlhwbUZWRk9BdkJkU1NXUUNJSGNoVUkxQzVjMDMiLCJpYXQiOjE3MjkwNzYxMTUsImV4cCI6MTcyOTA3OTcxNSwicGhvbmVfbnVtYmVyIjoiKzkxODc4NzA4MDM5NCIsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsicGhvbmUiOlsiKzkxODc4NzA4MDM5NCJdfSwic2lnbl9pbl9wcm92aWRlciI6InBob25lIn19.NpvX-QHWz1ijYjtbKwulvID09J4uxai3Ngqo4o7gLat7-QAfbsSG6y5wcEDofICeRH88J3EEzwdhQSa1rNqi8DIOrlMTuWR0SNxM9Ba4hxBuyGg5wUpikZM30bmS-Qkfs-va9BqcDM9vWWco26OyS_D61HowCP90UKmegy9Rvo_cOA9fPuA4Pepru9cLcyaFaZJRxtdHJQ02FyEgsftdOP-_zBIV87P3o6mm9vDQlH9Y_pQz8xTRTvt7FnwvRApEkRH4mq6uxp3SWFjRrRfE7lS0Svye8b2gNn8hjUgS4vtPHPNbgwNtprVrJAPDtRhcOWvc5abp9dRtwEEQupvuSg",
        // "path":"/"
        // }
    } catch (error) {}

    try {   
        let requestBody =  await request.json(); 
        const { cookieName, cookieValue } = requestBody; 
        if(cookieName && cookieName == 'phoneNumber' ) return await setCookie(request, requestBody);
        return NextResponse.json({ "status" : "Error", message: JSON.stringify(requestBody) }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ "status" : "Error", message: `${error?.message}` }, { status: 200 });
    }
}