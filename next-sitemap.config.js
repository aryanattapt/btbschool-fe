module.exports = {
    siteUrl: 'https://alpha.aryanattapt.my.id',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        additionalSitemaps: [
            // You can add additional sitemaps here if needed
        ],
        rules: [
            {
                userAgent: '*',
                disallow: ['/admin'], // Disallow any /admin URL
            },
        ],
    },
}  