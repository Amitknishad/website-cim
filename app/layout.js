// import "./globals.css";
import '../styles/globals.css';
import ThemeClient from '../components/ThemeClient';
import { colorPrimary } from '../styles/colors';

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Piyush Goyal",
  description: "Union Minister of Commerce & Industry and Member of Parliament, North Mumbai Lok Sabha",icons: {
    icon: '/favicon.ico', // or '/favicon.png'
  },
};

export default function RootLayout({ children }) {

  let themeColor = colorPrimary[700];

  return (
    <html lang="en">
      
      {/* <!-- Chrome, Firefox OS and Opera --> */}
      <meta name="theme-color" content={themeColor} ></meta>
      {/* <!-- Windows Phone --> */}
      <meta name="msapplication-navbutton-color" content={themeColor} ></meta>
      {/* <!-- iOS Safari --> */}
      <meta name="apple-mobile-web-app-status-bar-style" content={themeColor} ></meta>

      <body className={inter.className}>      
        <main style={{ 
          // background: `linear-gradient(0deg, #F7FBFE, #B3D7E7, #1a63d3 )`,
          backgroundColor : colorPrimary[50],
          backgroundImage: `url('/assets/images/bg_wa_chat.png')`
        }} > 
          <ThemeClient>{children}</ThemeClient> 
        </main>
      </body>
    </html>
);
}
