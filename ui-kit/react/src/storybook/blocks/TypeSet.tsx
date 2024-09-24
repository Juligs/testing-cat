import { TailwindTextClasses } from '@lib/tailwind/helpers';
import { getFontSizeLabelFromClass } from '../helpers';
import { TypeSetItem } from './TypeSetItem';

export interface TypeSetProps {
    typeset: TailwindTextClasses;
    fontWeight: number;
    fontFamily: string;
    label: string;
}

export function TypeSet({ typeset, label, fontWeight, fontFamily }: TypeSetProps) {
    return (
        <div>
            <div className="mt-4 flex flex-col gap-y-6 rounded-md border border-gray-200 px-xl shadow-md p-3">
                {Object.entries(typeset).map(([fontClass, properties], index) => {
                    const { fontSize, lineHeight, letterSpacing } = properties;
                    const size = Number(fontSize.replace('px', ''));
                    const sizeText = getFontSizeLabelFromClass(fontClass);
                    const formattedFontClass = fontClass.replace('.', '');

                    return (
                        <TypeSetItem
                            key={index}
                            sampleText={label}
                            fontClass={formattedFontClass}
                            fontSize={size}
                            sizeText={sizeText}
                            lineHeight={lineHeight}
                            letterSpacing={letterSpacing}
                        />
                    );
                })}
                <hr />
                <div className="flex flex-col gap-y-2">
                    <span>Font Weight: {fontWeight}</span>
                    <span>Font Family: {fontFamily}</span>
                </div>
            </div>
        </div>
    );
}
