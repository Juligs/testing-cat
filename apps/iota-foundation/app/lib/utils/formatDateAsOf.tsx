export function formatDateAsOf(timestamp?: string) {
    if (!timestamp) return null;

    return new Date(timestamp).toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}
