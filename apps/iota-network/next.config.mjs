import nextMDX from '@next/mdx';
import { REDIRECTIONS } from './config/redirections.mjs';

const withMDX = nextMDX({});

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    experimental: {
        mdxRs: true,
        turbo: {
            resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
            rules: {
                '*.scss': {
                    loaders: ['sass-loader'],
                    as: '*.css',
                },
            },
        },
    },
    async redirects() {
        return REDIRECTIONS;
    },
};

export default withMDX(nextConfig);
