/** @type {import('next').NextConfig} */
const developmentConfig = {};

/** @type {import('next').NextConfig} */
const productionConfig = {
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

export default productionConfig;
