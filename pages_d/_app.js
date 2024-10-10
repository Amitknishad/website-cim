
import { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '@/components/piyush/Header';
import Navbar from '@/components/piyush/Navbar';
// The Component prop is the active page, so whenever you navigate between routes, Component will change to the new page. 
// Therefore, any props you send to Component will be received by the page.

// pageProps is an object with the initial props that were preloaded for your page by one of our data fetching methods, otherwise it's an empty object.

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});


export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
