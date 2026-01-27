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
        '/api/events',
        '/api/exchanges',
        '/api/blog',
    ],
};
