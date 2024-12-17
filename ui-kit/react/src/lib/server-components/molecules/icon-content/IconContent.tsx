import clsx from 'clsx';
import {
    COLOR_ICON,
    COLOR_ICON_INVERTED,
    BG_COLOR_FILLED,
    BG_COLOR_INVERTED,
    COLOR_TITLE,
    COLOR_TITLE_INVERTED,
    COLOR_BODY,
    COLOR_BODY_INVERTED,
} from './iconContent.constants';

interface iconContentProps {
    /**
     * Icon to be displayed
     */
    icon?: React.ReactNode;
    /**
     * Content to be displayed
     */
    body?: string;
    /**
     * Title
     */
    title: string;
    /**
     * Inverted colors
     */
    inverted?: boolean;
    /**
     * Filled background color
     */
    filled?: boolean;
    /**
     * children
     */
    children?: React.ReactNode;
}

export function IconContent({
    icon,
    body,
    title,
    inverted = false,
    filled = false,
    children,
}: iconContentProps): JSX.Element {
    const iconColor = inverted ? COLOR_ICON_INVERTED : COLOR_ICON;
    const bgColors = filled ? (inverted ? BG_COLOR_INVERTED : BG_COLOR_FILLED) : inverted ? '' : '';
    const colorTitle = inverted ? COLOR_TITLE_INVERTED : COLOR_TITLE;
    const colorBody = inverted ? COLOR_BODY_INVERTED : COLOR_BODY;

    return (
        <div
            className={clsx('flex flex-col items-start gap-6 w-full rounded-3xl', bgColors, {
                'min-h-[455px] justify-between pl-4 pr-6 pt-6 pb-8': filled && children,
                'pl-4 pr-6 pt-6 pb-8': filled && !children,
            })}
        >
            <div className="flex flex-col gap-4 ">
                {icon && <div className={clsx('[&_svg]:h-12 [&_svg]:w-12', iconColor)}>{icon}</div>}
                <p className={clsx('text-title-md', colorTitle)}>{title}</p>
                {body && <p className={clsx('text-body-md', colorBody)}>{body}</p>}
            </div>
            {children && <>{children}</>}
        </div>
    );
}
