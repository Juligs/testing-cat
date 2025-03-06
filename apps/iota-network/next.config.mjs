import nextMDX from '@next/mdx';
import { REDIRECTIONS } from './config/redirections.mjs';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const withMDX = nextMDX({});

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline' https://webassets.iota.org;
    img-src 'self' blob: data: https://files.iota.org https://v5.airtableusercontent.com;
    font-src 'self' data: https://webassets.iota.org;
    media-src 'self' https://files.iota.org;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`.replace(/\n/g, '');

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
    webpack: (config) => {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

        const src = path.join(__dirname, '../../shared/public/logos');
        const dest = path.join(__dirname, './public/shared/shared-logos');

        config.plugins.push(
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: [dest],
            }),
        );

        config.plugins.push(
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: src,
                        to: dest,
                        force: true,
                    },
                ],
            }),
        );

        return config;
    },
    async redirects() {
        return REDIRECTIONS;
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    { key: 'X-Frame-Options', value: 'DENY' },
                    { key: 'Permissions-Policy', value: 'fullscreen=(), display-capture=()' },
                    { key: 'X-XSS-Protection', value: '0' },
                    {
                        key: 'Content-Security-Policy',
                        value: cspHeader,
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload',
                    },
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
                ],
            },
        ];
    },
};

export default withMDX(nextConfig);
