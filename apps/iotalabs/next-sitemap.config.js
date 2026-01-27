const SITE_URL = 'https://iotalabs.io';

module.exports = {
    siteUrl: SITE_URL,
    generateRobotsTxt: true,
    exclude: ['/api/grants', '/api/infra', '/api/projects', '/api/grants-stats', '/api/blog'],
};
