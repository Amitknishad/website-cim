import { Html, Head, Main, NextScript } from 'next/document'
// https://nextjs.org/docs/pages/building-your-application/routing/custom-document
// _document is only rendered on the server, so event handlers like onClick cannot be used in this file.
// <Html>, <Head />, <Main /> and <NextScript /> are required for the page to be properly rendered.

// The <Head /> component used in _document is not the same as next/head. 
// The <Head /> component used here should only be used for any <head> code that is common for all pages. 
// For all other cases, such as <title> tags, we recommend using next/head in your pages or components.

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}