import clsx from 'clsx';
import {
    BG_COLOR,
    BG_COLOR_INVERTED,
    TEXT_COLOR,
    TEXT_COLOR_INVERTED,
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
}

export function StackContainer({
    text,
    inverted,
    icon,
    children,
}: StackContainerProps): JSX.Element {
    const bgColors = inverted ? BG_COLOR_INVERTED : BG_COLOR;
    const textColor = inverted ? TEXT_COLOR_INVERTED : TEXT_COLOR;
    return (
        <div
            className={clsx('stack-container flex flex-col w-full p-6 gap-6 rounded-3xl', bgColors)}
        >
            <div
                className={clsx(
                    'flex justify-between items-start pb-4 [&_svg]:h-8 [&_svg]:w-8',
                    textColor,
                )}
            >
                <p className="text-label-lg">{text}</p>
                {icon}
            </div>
            <div className="flex flex-col gap-4">{children}</div>
        </div>
    );
}
