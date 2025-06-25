export function getPlatformFromUrl(rawUrl: string): string {
    if (!rawUrl) return '';

    const trimmed = rawUrl.trim();

    const isLikelyUrl = /^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(trimmed);
    if (!isLikelyUrl) return rawUrl;

    try {
        const url = new URL(trimmed);
        const hostname = url.hostname.toLowerCase();

        if (hostname.includes('discord')) return 'Discord';
        if (hostname.includes('instagram')) return 'Instagram';
        if (hostname.includes('linkedin')) return 'LinkedIn';
        if (hostname.includes('twitter') || hostname.includes('x.com')) return 'X';
        if (hostname.includes('youtube')) return 'YouTube';
        if (hostname.includes('t.me')) return 'Telegram';

        return rawUrl;
    } catch {
        return rawUrl;
    }
}

export function sanitizeUrl(rawUrl: string): string {
    if (!rawUrl || typeof rawUrl !== 'string') return '';

    const normalizedUrl = rawUrl.startsWith('http') ? rawUrl : `https://${rawUrl}`;

    const isValidPattern = /^[^\s,]+?\.[a-z]{2,}(\/.*)?$/i;
    if (!isValidPattern.test(normalizedUrl)) {
        return '';
    }

    try {
        const url = new URL(normalizedUrl);
        return url.href;
    } catch {
        return '';
    }
}
