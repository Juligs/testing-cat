interface TypeSetItemProps {
    sampleText: string;
    fontClass?: string;
    fontSize?: number;
    sizeText?: string;
    lineHeight?: string;
    letterSpacing?: string;
}

export function TypeSetItem({
    sampleText,
    fontClass,
    fontSize,
    sizeText,
    lineHeight,
    letterSpacing,
}: TypeSetItemProps) {
    return (
        <div className="flex flex-col gap-y-1">
            <div className={fontClass}>
                {sampleText} {sizeText}
            </div>
            <div>
                <span>{fontSize} px</span>
                {lineHeight && <span className="text-gray-600"> / {lineHeight} Line Height</span>}
                {letterSpacing && (
                    <span className="text-gray-400"> / {letterSpacing} Letter Spacing</span>
                )}
            </div>
        </div>
    );
}
