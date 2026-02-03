export const formatCoin = (value: string | number, compact = false) =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: compact ? 'compact' : 'standard',
        maximumFractionDigits: compact ? 1 : 0,
    }).format(Number(value));
