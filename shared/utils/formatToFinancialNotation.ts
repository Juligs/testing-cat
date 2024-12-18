export function formatToFinancialNotation(value: number): string {
    let formattedValue: number;
    let suffix: string = '';

    if (value >= 1_000_000_000_000) {
        formattedValue = value / 1_000_000_000_000;
        suffix = 'T';
    } else if (value >= 1_000_000_000) {
        formattedValue = value / 1_000_000_000;
        suffix = 'B';
    } else if (value >= 1_000_000) {
        formattedValue = value / 1_000_000;
        suffix = 'M';
    } else if (value >= 1_000) {
        formattedValue = value / 1_000;
        suffix = 'K';
    } else {
        formattedValue = value;
    }

    let result = formattedValue.toFixed(2);

    if (result.endsWith('.00')) {
        result = result.slice(0, -3);
    }

    return result + suffix;
}
