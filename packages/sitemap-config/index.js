/**
 * Centralized sitemap priority configuration for all apps in the monorepo.
 *
 * Priority scale (0.0 - 1.0):
 *   HOMEPAGE  → 1.0  (root page)
 *   HIGH      → 0.9  (relevant subpages, future use)
 *   DEFAULT   → 0.7  (general pages)
 *   LEGAL     → 0.1  (legal/policy pages)
 */

const RELEVANT_PAGE_SLUGS = [];

const SITEMAP_PRIORITY = {
    HOMEPAGE: 1.0,
    HIGH: 0.9,
    DEFAULT: 0.7,
    LEGAL: 0.1,
};

/**
 * URL path slugs that are considered legal pages and receive LEGAL priority.
 * Add new legal page slugs here to apply the low priority across all sites.
 */
const LEGAL_PAGE_SLUGS = [
    'cookie-policy',
    'privacy-policy',
    'terms-of-use',
    'impressum',
    'trademark',
    'event-terms',
    'terms-telegram',
    'terms-ambassador',
    'iota-wallet-tos',
];

/**
 * Returns the appropriate sitemap priority for a given URL path.
 * @param {string} path - The URL path (e.g. '/', '/about', '/privacy-policy')
 * @returns {number} The priority value
 */
function getPriorityForPath(path) {
    if (path === '/') {
        return SITEMAP_PRIORITY.HOMEPAGE;
    }

    const slug = path.replace(/\/+$/, '').split('/').pop();
    if (LEGAL_PAGE_SLUGS.includes(slug)) {
        return SITEMAP_PRIORITY.LEGAL;
    }

    if (RELEVANT_PAGE_SLUGS.includes(slug)) {
        return SITEMAP_PRIORITY.HIGH;
    }

    return SITEMAP_PRIORITY.DEFAULT;
}

/**
 * Drop-in `transform` function for next-sitemap configs.
 * Applies centralized priority rules to every URL in the sitemap.
 *
 * Usage in next-sitemap.config.js:
 *   const { sitemapTransform } = require('@repo/sitemap-config');
 *   module.exports = { ..., transform: sitemapTransform };
 *
 * @param {object} config - The next-sitemap IConfig object
 * @param {string} path   - The URL path being transformed
 * @returns {Promise<object>} The sitemap URL entry
 */
async function sitemapTransform(config, path) {
    return {
        loc: path,
        changefreq: config.changefreq,
        priority: getPriorityForPath(path),
        alternateRefs: config.alternateRefs ?? [],
    };
}

module.exports = {
    SITEMAP_PRIORITY,
    LEGAL_PAGE_SLUGS,
    getPriorityForPath,
    sitemapTransform,
};
