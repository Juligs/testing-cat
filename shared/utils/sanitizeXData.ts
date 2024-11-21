interface sanitizeXDataProps {
    url?: string;
    username?: string;
}
export function sanitizeXData(inputUrl: string): sanitizeXDataProps {
    if (!inputUrl) {
        return {
            username: undefined,
            url: undefined,
        };
    } else {
        const cleanUsername = (username: string) => `@${username}`;
        const normalizeUrl = (username: string) => `https://x.com/${username}`;

        const trimmedUrl = inputUrl.trim();

        const urlRegex = /^(?:https?:\/\/)?(?:x\.com|twitter\.com)?\/?@?([a-zA-Z0-9_]{1,15})$/;
        const matchedUrlData = trimmedUrl.match(urlRegex);

        if (matchedUrlData?.[1]) {
            const matchedUsername = matchedUrlData[1];
            return {
                username: cleanUsername(matchedUsername),
                url: normalizeUrl(matchedUsername),
            };
        } else {
            return {
                username: undefined,
                url: undefined,
            };
        }
    }
}
