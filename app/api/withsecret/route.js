const API_SERVER = process.env.API_SERVER_SQL
import { NextResponse } from "next/server";
import { cookies } from 'next/headers';
export const dynamic = 'force-dynamic' // defaults to auto

// ####################### ####################### ####################### #######################
// ####################### ####################### ####################### #######################
// ####################### ####################### ####################### #######################
// ####################### ####################### ####################### #######################

async function fetchUserInfo(request, path) {
    let phoneNumber = " ";
    try {
        const cookieStore = cookies();
        const cookieValue_ = cookieStore.get('phoneNumber');
        console.log(`fetchUserInfo => cookieValue_ : ${JSON.stringify(cookieValue_)}`);
        phoneNumber = cookieValue_.value; // ST_NO%3A20%3BPC_NO%3A19%3BAC_NO%3A156 => ST_NO:20;PC_NO:19;AC_NO:156;BHAG:1
    } catch (error) {}
    try {
        phoneNumber = phoneNumber.slice(-10);
        let requestBody = { "PHONE1" : phoneNumber };

        const requestOptions = {
            method : "POST",
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.NEXTAUTH_SECRET_NEW}`},
            body : JSON.stringify(requestBody)
        };

        let apiURL = `${API_SERVER}/api/withsecret/sangathan`;
        let apiResponse = await fetch(apiURL, requestOptions);
        let jsonResponse = await apiResponse.json();
        return NextResponse.json({...jsonResponse}, { status: 200 }); 
    } catch (error) {
        console.log(`fetchUserInfo => error : ${error?.message}`); 
        return NextResponse.json({ "status" : "Error", message: `${error?.message}` }, { status: 400 });
    }
}

async function fetchVoters(request, path, withMobile) {

    let A_FIELD = null;
    let BHAG = null;
    let CASTIDA = null;
    let acCode = "999";
    let rawQuery = "";

    try {
        const cookieStore = cookies();        
        const A_FIELD_OBJ = cookieStore.get('A_FIELD'); // {"name":"A_FIELD","value":"ST_NO:20;PC_NO:24;AC_NO:190;BHAG:29;PAGE:18","path":"/"}
        // console.log(`fetchVoters => A_FIELD_OBJ : ${JSON.stringify(A_FIELD_OBJ)}`);
        A_FIELD = A_FIELD_OBJ.value; // ST_NO:20;PC_NO:24;AC_NO:190;BHAG:29;PAGE:18;CASTIDA=V
        console.log(`fetchVoters => A_FIELD : ${A_FIELD}`);        
        
        if(A_FIELD?.includes("AC_NO:")){
            let parts =  A_FIELD.split(";"); // %3B => ;
            // console.log(`fetchVoters => parts : ${JSON.stringify(parts)}`);
            // => ["ST_NO:20","PC_NO:24","AC_NO:190","BHAG:29","PAGE:18"]
            const acNoIndex = parts.findIndex(part => part.startsWith('AC_NO:'));
            acCode = (parts.slice(acNoIndex, acNoIndex + 1)[0]).slice(-3); //AC_NO:190   // .map(item => item.split(':')[1]);
        }

        if(A_FIELD?.includes("BHAG:")) {
            let parts =  A_FIELD.split(";");
            const findIndex = parts.findIndex(part => part.startsWith('BHAG:'));
            let searchStr = (parts.slice(findIndex, findIndex + 1)[0]).slice(5);             
            if(searchStr) BHAG = searchStr;
            console.log(`fetchVoters => BHAG : ${BHAG}`);
        }

        if(A_FIELD?.includes("CASTIDA:")) {
            let parts =  A_FIELD.split(";");
            const findIndex = parts.findIndex(part => part.startsWith('CASTIDA:'));
            let searchStr = (parts.slice(findIndex, findIndex + 1)[0]).slice(8);             
            if(searchStr) CASTIDA = searchStr;
            console.log(`fetchVoters => CASTIDA : ${CASTIDA}`);
        }

    } catch (error) {
        console.log(`fetchVoters => error-1 : ${error?.message}`);
    }

    try {
        let searchStr = 'SELECT AREA_ID, VOTERID, BHAG, VNAME, FNAME, RELATION, MAINCAST, CASTIDA, PHONE1, SEX, HNO, AREACOLONY FROM tableName';        
        if(withMobile && withMobile == 'true' ) rawQuery = `${searchStr} WHERE PHONE1 IS NOT NULL AND LENGTH(PHONE1) > 9`;
        else rawQuery = `${searchStr} WHERE VOTERID IS NOT NULL`;          
        if(CASTIDA){
            if(CASTIDA?.includes(",")){
                let parts =  CASTIDA.split(","); // ["29","30","31"]
                console.log(`fetchVoters => parts : ${JSON.stringify(parts)}`);
                // Join the array elements into a single string with quotes
                const quotedData = parts.map(rowData => `'${rowData}'`).join(',');
                rawQuery = `${rawQuery} AND LENGTH(CASTIDA) > 0 AND CASTIDA IN (${quotedData})`;
            }else rawQuery = `${rawQuery} AND LENGTH(CASTIDA) > 0 AND CASTIDA= "${CASTIDA}" `;            
        }
        if(BHAG){
            if(BHAG?.includes(",")){
                let parts =  BHAG.split(","); // ["29","30","31"]
                console.log(`fetchVoters => parts : ${JSON.stringify(parts)}`);
                // Join the array elements into a single string with quotes
                const quotedData = parts.map(rowData => `'${rowData}'`).join(',');
                rawQuery = `${rawQuery} AND BHAG IN (${quotedData})`;
            }else rawQuery = `${rawQuery} AND BHAG = "${BHAG}" `;
        }
        if(withMobile && withMobile == 'true' ) rawQuery = `${rawQuery} GROUP BY PHONE1`;
        rawQuery = `${rawQuery} ORDER BY VOTERID ASC LIMIT 1500`;
        console.log(`fetchVoters => rawQuery : ${rawQuery}`);
    } catch (error) {}

    try {     

        let apiURL = `${API_SERVER}/api/withsecret/${path}/byQuery?acCode=${acCode}`; // http://localhost:8888/api/withsecret/voters
        console.log(`fetchVoters => apiURL : ${apiURL}`); // http://localhost:8888/api/withsecret/voters/byQuery?acCode=156

        const requestOptions = {
            method : "POST",
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.NEXTAUTH_SECRET_NEW}`}, // , ...authHeader(url) 
            body : JSON.stringify( { "rawQuery" : rawQuery } )
        };

        let apiResponse = await fetch(apiURL, requestOptions);
        let jsonResponse = await apiResponse.json();
        // console.log(`fetchVoters => jsonResponse : ${JSON.stringify(jsonResponse)}`); 
        return NextResponse.json({...jsonResponse}, { status: 200 }); 
    } catch (error) {
        console.log(`handleRequest => error : ${error?.message}`); 
        return NextResponse.json({ "status" : "Error", message: `${error?.message}` }, { status: 400 });
    }
}

// ####################### ####################### ####################### #######################
// ####################### ####################### ####################### #######################
// ####################### ####################### ####################### #######################
// ####################### ####################### ####################### #######################

async function handleRequest(request) {
    try {     
        const { method } = request;          
        // console.log(`handleRequest => method : ${method}`); // handleRequest => method : GET
        let searchParams = request?.nextUrl?.searchParams; // => path=user
        let path = searchParams.get('path');
        console.log(`handleRequest => searchParams.path : ${path}`); 
        if(path&& path=='voters'){
            let withMobile = searchParams.get('mobile');
            return await fetchVoters(request, path, withMobile);
        }
        if(path&& path=='sangathan') return await fetchUserInfo(request, path);
        return NextResponse.json({ message: `${request.nextUrl} working... with secret ${process.env.NEXTAUTH_SECRET_NEW}` }, { status: 200 }); 
    } catch (error) {
        console.log(`handleRequest => error : ${error?.message}`); 
        return NextResponse.json({ "status" : "Error", message: `${error?.message}` }, { status: 400 });
    }
}

// export async function GET(request) { return handleRequest(request); }
export const GET = async (request) => await handleRequest(request);
export const POST = async (request) => await handleRequest(request);
export const PUT = async (request) => await handleRequest(request);
export const DELETE = async (request) => await handleRequest(request);