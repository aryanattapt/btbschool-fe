/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: "https://clientpreview.aryanattapt.my.id/",
    swcMinify: false,
    trailingSlash: true,
    images: {
        path: 'https://clientpreview.aryanattapt.my.id/_next/image',
    },
    webpack: (config) => {
        config.resolve.alias.canvas = false;
        return config;
    },    
};

export default nextConfig;
