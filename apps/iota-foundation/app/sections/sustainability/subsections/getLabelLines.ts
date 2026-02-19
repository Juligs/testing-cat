import { MAX_CHARS_PER_LINE_DESKTOP, MAX_CHARS_PER_LINE_TABLET, MAX_LINES } from '../constants';

function wrapLabelLines(text: string, maxCharsPerLine: number, maxLines: number): string[] {
    if (text.length <= maxCharsPerLine) return [text];

    const words = text.split(' ');
    const lines: string[] = [];
    let line = '';

    for (const word of words) {
        const nextLine = line ? `${line} ${word}` : word;

        if (nextLine.length <= maxCharsPerLine) {
            line = nextLine;
        } else {
            lines.push(line);
            line = word;

            if (lines.length === maxLines - 1) break;
        }
    }

    if (line) lines.push(line);
    return lines.slice(0, maxLines);
}
export function getLabelLines(label: string, isTablet: boolean) {
    const maxChars = isTablet ? MAX_CHARS_PER_LINE_TABLET : MAX_CHARS_PER_LINE_DESKTOP;

    return wrapLabelLines(label, maxChars, MAX_LINES);
}
