// @ts-expect-error Ghost Content API has no TypeScript typings
import GhostContentAPI from '@tryghost/content-api';

export type BlogSource = 'network' | 'labs';
const GHOST_CONFIG = {
    network: {
        url: process.env.IOTA_NETWORK_BLOG_URL!,
        key: process.env.IOTA_NETWORK_BLOG_KEY!,
    },
    labs: {
        url: process.env.IOTALABS_BLOG_URL!,
        key: process.env.IOTALABS_BLOG_KEY!,
    },
};

export function ghostClient(source: BlogSource) {
    const config = GHOST_CONFIG[source];

    if (!config?.url || !config?.key) {
        throw new Error(`Ghost config missing for source: ${source}`);
    }

    return new GhostContentAPI({
        url: config.url,
        key: config.key,
        version: 'v6.0',
    });
}
