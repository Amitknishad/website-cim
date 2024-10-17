// import "./globals.css";
import '../styles/globals.css';
import ThemeClient from '../components/ThemeClient';
import { colorPrimary } from '../styles/colors';

// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HCM TEAM SM",
  description: "Social Media Management Department - सोशल मीडिया मैनेजमेंट विभाग | HCM TEAM SM | BJP Rajasthan",icons: {
    icon: '/favicon.ico0', // or '/favicon.png'
  },
};

export default function RootLayout({ children }) {

  let themeColor = colorPrimary[500];

  return (
    <html lang="en">
      
      {/* <!-- Chrome, Firefox OS and Opera --> */}
      <meta name="theme-color" content={themeColor} ></meta>
      {/* <!-- Windows Phone --> */}
      <meta name="msapplication-navbutton-color" content={themeColor} ></meta>
      {/* <!-- iOS Safari --> */}
      <meta name="apple-mobile-web-app-status-bar-style" content={themeColor} ></meta>

      {/* className={inter.className} */}
      <body>      
        <main style={{ 
          // background: `linear-gradient(0deg, #F7FBFE, #B3D7E7, #1a63d3 )`,
          backgroundColor : colorPrimary[50], minHeightt: '99.9vh', overflowY: 'auto',
          backgroundImage: `url('/assets/images/bg_wa_chat.png')`
        }} > 
          <ThemeClient>{children}</ThemeClient> 
        </main>
      </body>
    </html>
);
}
