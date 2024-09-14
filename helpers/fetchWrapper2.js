import Router from "next/router"; // don't => import { Router } from "next/router";

// https://jasonwatmore.com/post/2021/09/27/react-fetch-logout-on-401-unauthorized-or-403-forbidden-http-response
// variant 2
export const fetchWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
};

function request(method) {
    
    return async (url, body) => {
        const requestOptions = { method, headers: authHeader(url) };
        if (body) {
            requestOptions.headers['Content-Type'] = 'application/json';
            requestOptions.body = JSON.stringify(body);
        }
        const apiRes = await fetch(url, requestOptions);
        return handleResponse(apiRes);
    }
}

function authHeader(url) {
    return { 'Content-Type': 'application/json' };
    // return auth header with basic auth credentials if user is logged in and request is to the api url
    // const authData = basicAuthData();
    // const isLoggedIn = !!authData;
    // const isApiUrl = url.startsWith(process.env.REACT_APP_API_URL);
    // if (isLoggedIn && isApiUrl) {
    //     return { Authorization: `Basic ${authData}` };
    // } else {
    //     return {};
    // }
}

async function handleResponse(response) {

    let alertMsg = null;
    try {
        let responseCode = response.status+"";
        // console.log("handleResponse.responseCode: "+ responseCode);
        // console.log("responseCode.startsWith('4') : "+ responseCode.startsWith("4"));
        if(responseCode.startsWith('4')){
            let resText = await response.text();
            const jsonRes = resText && JSON.parse(resText); 
            let resStatus = jsonRes.status;
            if(resStatus == "Error" ) alertMsg = jsonRes.message;
        }
    } catch (error) {}

    try {

        if(alertMsg) alert(alertMsg);

        let responseCode = response.status;
        console.log("response.status: "+ responseCode);
        if([401].includes(responseCode)){
            Router.push('/login'); // unauthorized           
            return;
        }

        if([403].includes(responseCode)){
            Router.push(`/unauthorized`); // /login?redirect_uri=${window.location.pathname}
            return;
        }

        // const {
        //     host, hostname, href, origin, pathname, port, protocol, search
        //   } = window.location

        // 400 : Bad request => required parameter is mission in request
        // 401 : Unauthorized ( An access token is missing / An access token is expired, revoked, malformed, or invalid for other reasons )
        // 403 : Forbidden => Token/Credentials are valid but it needs appropriate privileges to perform the requested action. ( client is forbidden to access this url )
        // 404 : resource does exist
        
    } catch (error) {
        console.log("handleResponse => responseCode : "+response.status);
        return;
    }

    try{
        let resText = await response.text();
        const data = resText && JSON.parse(resText); 
        return data;
    }catch(error){
        console.log("handleResponse  => error : "+error);
    }
}