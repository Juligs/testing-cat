// eslint-disable-next-line @typescript-eslint/no-require-imports
const { sitemapTransform } = require('@repo/sitemap-config');

const SITE_URL = 'https://iotalabs.io';

module.exports = {
    siteUrl: SITE_URL,
    generateRobotsTxt: true,
    exclude: [
        '/api/grants',
        '/api/infra',
        '/api/projects',
        '/api/grants-stats',
        '/api/proposals',
        '/api/blog',
    ],
    transform: sitemapTransform,
    additionalPaths: async (config) => [await config.transform(config, '/')],
};
