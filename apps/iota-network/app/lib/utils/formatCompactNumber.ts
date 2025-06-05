export function formatCompactNumber(value: number | string): string {
    return new Intl.NumberFormat('en-US', {
        notation: 'compact',
        compactDisplay: 'short',
        maximumFractionDigits: 2,
    }).format(Number(value));
}
