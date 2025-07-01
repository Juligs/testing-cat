import React from 'react';
import { AnchorLinkSize } from './anchorLink.enums';
import {
    INVERTED_TEXT_COLOR,
    DEFAULT_TEXT_COLOR,
    HOVER_TEXT_COLOR,
    HOVER_BG_COLOR,
    DEFAULT_ICON_COLOR,
    INVERTED_ICON_COLOR,
    DEFAULT_ICON_EXTERNAL_COLOR,
    INVERTED_ICON_EXTERNAL_COLOR,
    ANCHOR_LINK_PADDING,
    BACKGROUND_AND_BORDER_COLORS,
    ANCHOR_LINK_HIGHLIGHTED,
    ANCHOR_LINK_HIGHLIGHTED_INVERTED,
    ANCHOR_LINK_ICON_IS_EXTERNAL,
    ANCHOR_LINK_ICON_LEADING_ICON,
    TEXT_SIZE,
} from './anchorLink.constants';
import clsx from 'clsx';
import { LineArrowSmall, OutboundLink } from '@repo/icons';

interface AnchorLinkProps {
    isExternal?: boolean;
    text: string;
    size?: AnchorLinkSize;
    inverted?: boolean;
    leadingIcon?: React.ReactNode;
    onClick?: () => void;
    darkest?: boolean;
}

export function AnchorLink({
    isExternal,
    text,
    size = AnchorLinkSize.Default,
    inverted,
    leadingIcon,
    onClick,
    darkest,
}: AnchorLinkProps) {
    const textColor = inverted ? INVERTED_TEXT_COLOR : DEFAULT_TEXT_COLOR;
    const leadingIconColor = darkest
        ? inverted
            ? INVERTED_TEXT_COLOR
            : DEFAULT_TEXT_COLOR
        : inverted
          ? INVERTED_ICON_COLOR
          : DEFAULT_ICON_COLOR;
    const hoverTextColor = leadingIcon || size === AnchorLinkSize.Small ? HOVER_TEXT_COLOR : '';
    const hoverBgColor = leadingIcon && size === AnchorLinkSize.Default ? '' : HOVER_BG_COLOR;

    const isExternalIconColor = inverted
        ? INVERTED_ICON_EXTERNAL_COLOR
        : DEFAULT_ICON_EXTERNAL_COLOR;

    const bgAndBorderColors = inverted
        ? BACKGROUND_AND_BORDER_COLORS.inverted
        : BACKGROUND_AND_BORDER_COLORS.default;

    const highlightedHoveredAndFocusedColor =
        size === AnchorLinkSize.Small
            ? inverted
                ? ANCHOR_LINK_HIGHLIGHTED_INVERTED
                : ANCHOR_LINK_HIGHLIGHTED
            : '';
    const isLeadingIcon =
        leadingIcon && size !== AnchorLinkSize.Small
            ? inverted
                ? ANCHOR_LINK_HIGHLIGHTED_INVERTED
                : ANCHOR_LINK_HIGHLIGHTED
            : '';

    return (
        <div
            className={clsx(
                'group anchor-link hover:cursor-pointer flex flex-row justify-between items-center w-full gap-6',
                hoverBgColor,
                hoverTextColor,
                ANCHOR_LINK_PADDING[size],
                highlightedHoveredAndFocusedColor,
                bgAndBorderColors,
                isLeadingIcon,
                {
                    inverted: inverted && size === AnchorLinkSize.Small,
                    'py-3': size === AnchorLinkSize.Default,
                },
            )}
            onClick={onClick}
            {...(onClick && { tabIndex: 0, role: 'button' })}
        >
            <div className={clsx('flex gap-3 items-center', TEXT_SIZE[size])}>
                {leadingIcon && (
                    <div
                        className={clsx(
                            'flex items-center justify-center',
                            leadingIconColor,
                            ANCHOR_LINK_ICON_LEADING_ICON[size],
                        )}
                    >
                        {leadingIcon}
                    </div>
                )}
                <p className={clsx(textColor)}>{text}</p>
            </div>

            <span
                className={clsx(isExternalIconColor, ANCHOR_LINK_ICON_IS_EXTERNAL[size], {
                    'group-hover:translate-x-2 transition ease-in duration-150':
                        size === AnchorLinkSize.Default && !isExternal,
                })}
            >
                {isExternal ? <OutboundLink /> : <LineArrowSmall />}
            </span>
        </div>
    );
}
