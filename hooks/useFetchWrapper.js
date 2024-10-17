export { useFetchWrapper  };
const useFetchWrapper = () => { // {notificationCtx}

    // React.useEffect(() => {
    //     return () => {};
    // }, []);

    async function handleResponse(response) {

        let alertMsg = null;
        try {
            let responseCode = response.status+"";
            // console.log("handleResponse.responseCode: "+ responseCode);
            // console.log("responseCode.startsWith('4') : "+ responseCode.startsWith("4"));
            if(responseCode.startsWith('4')){
                console.log("response.status: "+ responseCode);
                let resText = await response.text();
                const jsonRes = resText && JSON.parse(resText); 
                let resStatus = jsonRes.status;
                if(resStatus == "Error" ) alertMsg = jsonRes.message;
            }
        } catch (error) {}

        try {
            // if(alertMsg) alert(alertMsg);
            // if(alertMsg) notificationCtx.error(alertMsg);
        } catch (error) {}

        try {

            let responseCode = response.status;
            // console.log("handleResponse => response.status : "+response.status);
            
            if([401].includes(responseCode)){
                let currHref =  window.location.href;
                if(!currHref?.includes('home')) window.location.href = '/unauthorized'; // unauthorized                           
                return;
            }

            if([403].includes(responseCode)) {
                window.location.href = '/unauthorized';  // /login?redirect_uri=${window.location.pathname}
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
            console.log("handleResponse => error : "+error?.message);
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

    async function handleFetch(apiPath, requestOptions) {
        // try{            
        //     if(!apiPath.includes('acCode')){
        //         let acCodeS = '000';
        //         if(localStorage.getItem("acCodeS") !== null) acCodeS = localStorage.getItem("acCodeS");
        //         if(apiPath.includes('?')) apiPath = `${apiPath}&acCode=${acCodeS}`;        
        //         else apiPath = `${apiPath}?acCode=${acCodeS}`; 
        //     }            
        // }catch(error){}
        // console.log(`handleFetch => apiPath : ${apiPath}`);
        let apiRes =  await fetch(apiPath, requestOptions);
        return await handleResponse(apiRes);
    }


    // ####################### ####################### ####################### #######################
    // ####################### ####################### ####################### #######################
    // ####################### ####################### ####################### #######################
    // ####################### ####################### ####################### #######################
    
    
    const get = async(apiPath) => {
        const requestOptions = { method: 'GET' };
        return await handleFetch(apiPath, requestOptions);
    };

    const post = async(apiPath, requestBody) => {
        const requestOptions = { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(requestBody) 
        };
        return await handleFetch(apiPath, requestOptions);
    };

    const put = async(apiPath, requestBody) => {
        const requestOptions = { 
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody) 
        }
        return await handleFetch(apiPath, requestOptions);
    };
      
    const delete_ = async(apiPath) => {
        const requestOptions = { method: 'DELETE' };
        return await handleFetch(apiPath, requestOptions);
    };

    return { get, post, put, delete_ };

}