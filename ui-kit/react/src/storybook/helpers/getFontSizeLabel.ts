const SIZE_TO_LABEL_MAP: Record<string, string> = {
    sm: 'Small',
    md: 'Medium',
    lg: 'Large',
};
export function getFontSizeLabelFromClass(fontClass: string): string {
    const fontClassSplit = fontClass.split('-');
    const size = fontClassSplit[fontClassSplit.length - 1];
    if (!size) {
        return '';
    }
    const label = SIZE_TO_LABEL_MAP[size];
    return label || '';
}
