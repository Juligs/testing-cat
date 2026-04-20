// eslint-disable-next-line @typescript-eslint/no-require-imports
const { sitemapTransform } = require('@repo/sitemap-config');

const SITE_URL = 'https://iota-foundation.org';

module.exports = {
    siteUrl: SITE_URL,
    generateRobotsTxt: true,
    exclude: [
        '/api/jobs',
        '/api/events',
        '/api/research-papers',
        '/api/blog',
        '/api/compliance-papers',
    ],
    transform: sitemapTransform,
    additionalPaths: async (config) => [await config.transform(config, '/')],
};
