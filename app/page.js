"use client";
import React from 'react';
import { redirect } from 'next/navigation'

export default function WebPage() {
  // React.useEffect( ()=> window.location.href = "/home" ) ;
  redirect('/home')
  return<></>;
}

// export default function Page() {
//   return <h1>Hello, Index Page!</h1>
// }
