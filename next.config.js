/** @type {import("next").NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NODE_ENV === "production" ? "/ai-site" : "/",
    basePath: process.env.NODE_ENV === "production" ? "/ai-site" : "",
    reactStrictMode: true,
    images: {
        unoptimized: true
    },
    swcMinify: true
};

module.exports = nextConfig;
