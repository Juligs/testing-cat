import clsx from 'clsx';
import {
    TEXT_COLOR_DEFAULT,
    TEXT_COLOR_DEFAULT_INVERTED,
    TEXT_COLOR_ICON,
    TEXT_COLOR_ICON_INVERTED,
} from './constants';
import { LineArrowSmall } from '@repo/icons';

interface TextLinkProps {
    text: string;
    inverted?: boolean;
    icon?: React.ReactNode;
    lineArrowSmall?: boolean;
}

export function TextLinkWithIcon({ text, inverted, icon, lineArrowSmall = false }: TextLinkProps) {
    const iconColor =
        icon || lineArrowSmall
            ? inverted
                ? TEXT_COLOR_ICON_INVERTED
                : TEXT_COLOR_ICON
            : inverted
              ? TEXT_COLOR_DEFAULT_INVERTED
              : TEXT_COLOR_DEFAULT;

    return (
        <button
            className={clsx(
                'relative flex items-center gap-4 cursor-pointer group max-w-max',
                iconColor,
            )}
        >
            {icon && <span className=" [&_svg]:h-12 [&_svg]:w-12">{icon}</span>}
            <p className="text-title-sm text-darkest-inverted"> {text} </p>
            {lineArrowSmall && (
                <span className="transform group-hover:translate-x-1 transition-transform ease-in duration-300">
                    <LineArrowSmall />
                </span>
            )}
        </button>
    );
}
