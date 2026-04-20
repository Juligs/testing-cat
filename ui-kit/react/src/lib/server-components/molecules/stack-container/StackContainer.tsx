import { clsx } from 'clsx';
import {
    BG_COLOR,
    BG_COLOR_INVERTED,
    TEXT_COLOR,
    TEXT_COLOR_INVERTED,
    ICON_COLOR,
    ICON_COLOR_INVERTED,
} from './stackContainer.constants';

interface StackContainerProps {
    /**
     * Text
     */
    text: string;
    /**
     * colors inverted
     */
    inverted?: boolean;
    /**
     * different icon
     */
    icon?: React.ReactNode;
    /**
     * are links
     */
    children?: React.ReactNode;
    /**
     * column icon
     */
    column?: boolean;
    /**
     * color icon
     */
    highlighted?: boolean;
}

export function StackContainer({
    text,
    inverted,
    icon,
    children,
    column,
    highlighted,
}: StackContainerProps): React.JSX.Element {
    const bgColors = highlighted ? (inverted ? '' : '') : inverted ? BG_COLOR_INVERTED : BG_COLOR;

    const textColor = inverted ? TEXT_COLOR_INVERTED : TEXT_COLOR;
    const IconColor = inverted ? ICON_COLOR_INVERTED : ICON_COLOR;
    return (
        <div
            className={clsx('stack-container flex flex-col w-full p-6 gap-6 rounded-3xl', bgColors)}
        >
            <div
                className={clsx(
                    'flex items-start pb-4',
                    textColor,
                    column ? 'flex flex-col-reverse gap-4' : 'justify-between',
                )}
            >
                <p className="text-label-lg">{text}</p>
                <div className={clsx('[&_svg]:h-8 [&_svg]:w-8', IconColor)}>{icon}</div>
            </div>
            <div className="flex flex-col gap-4">{children}</div>
        </div>
    );
}
