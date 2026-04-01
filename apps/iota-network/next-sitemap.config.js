// eslint-disable-next-line @typescript-eslint/no-var-requires
const { sitemapTransform } = require('@repo/sitemap-config');

const SITE_URL = 'https://iota.org';

module.exports = {
    siteUrl: SITE_URL,
    generateRobotsTxt: true,
    exclude: [
        '/api/grants',
        '/api/projects',
        '/api/grants-stats',
        '/api/network-stats',
        '/api/staking-stats',
        '/api/consensus-stats',
        '/api/evm-stats',
        '/api/proposals',
        '/api/events',
        '/api/exchanges',
        '/api/blog',
    ],
    transform: sitemapTransform,
    additionalPaths: async (config) => [await config.transform(config, '/')],
};
