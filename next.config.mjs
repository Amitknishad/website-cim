/** @type {import('next').NextConfig} */
const nextConfig = {
    
    // When a Next.js 14 webpage loads twice, it can be due to several reasons. Here are some common issues and their solutions:
    // 1. Strict Mode: React's Strict Mode in development mode can cause double rendering to help identify side effects. 
    // This is only a development feature and should not affect production. 
    // Ensure you're not confusing development behavior with production behavior.

    reactStrictMode: false,
    distDir: 'build',
    experimental: {
        esmExternals: false,
        forceSwcTransforms: true,
    },

};

export default nextConfig;
