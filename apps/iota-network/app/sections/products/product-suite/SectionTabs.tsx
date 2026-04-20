import { Button, ButtonRadius, ButtonSize, TitleTextSize, VerticalTitle } from 'react-ui-kit';

type SegmentedButtonItem = React.ComponentProps<typeof Button>;

interface SectionTabsProps {
    content: SegmentedButtonItem[];
    titleProps?: React.ComponentProps<typeof VerticalTitle>;
}

export function SectionTabs({ content, titleProps }: SectionTabsProps) {
    return (
        <div className="flex flex-col gap-2 items-center">
            {titleProps && (
                <VerticalTitle {...titleProps} isCentered size={TitleTextSize.ExtraSmall} />
            )}
            <div className="flex gap-2 p-1 rounded-full bg-iota-neutral-92">
                {content.map((item, i) => (
                    <Button
                        key={i}
                        {...item}
                        size={ButtonSize.Small}
                        buttonBorderRadius={ButtonRadius.Rounded}
                    />
                ))}
            </div>
        </div>
    );
}
