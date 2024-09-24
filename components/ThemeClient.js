"use client";
// import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/themes/theme';

export default function ThemeClient({children}) {
    return (
        // <SessionProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        // </SessionProvider>
    );
} 