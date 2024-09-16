// middleware.js

// Middleware in Next.js 14 can be used to intercept requests and perform checks or modifications before they reach your route handlers.
import { withAuth } from "next-auth/middleware"

//  Will run on all routes under /pages
export default withAuth({
  
  callbacks: {

    // token => {"email":"amitknishad11@gmail.com","userRole":"admin","iat":1650812090,"exp":1653404090,"jti":"1ca9081e-1ea3-4156-aeb7-c8b5aa29c311"}
    
    // The default is to let the user continue if they have a valid JWT (basic authentication).
    authorized: ({ token, req }) => {

      try{

        let urlStr = JSON.stringify(req?.nextUrl); // "http://localhost:3000/assets/favicon.ico"
        console.log("withAuth.callbacks.authorized => req.urlStr : "+urlStr);

        if(urlStr.includes('assets')) { // 
          // console.log("withAuth.callbacks.authorized => req.urlStr : "+urlStr);
          return true;   
        };         

      }catch(err){
        console.log("withAuth.callbacks.authorized => Error : "+err);
      }

      // console.log("withAuth.callbacks.authorized => token : "+token);
      // console.log("withAuth.callbacks.authorized => token : "+JSON.stringify(token));
      return token?.email.length > 0;
      
    },

  },

  pages: {
    signIn: '/account/login',
    error: '/auth/error',
  }

})