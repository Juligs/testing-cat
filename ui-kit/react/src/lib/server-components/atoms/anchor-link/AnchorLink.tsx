import React from 'react';
import { AnchorLinkSize } from './anchorLink.enums';
import {
    INVERTED_TEXT_COLOR,
    DEFAULT_TEXT_COLOR,
    ANCHOR_LINK_PADDING,
    BACKGROUND_AND_BORDER_COLORS,
    ANCHOR_LINK_HIGHLIGHTED,
    ANCHOR_LINK_HIGHLIGHTED_INVERTED,
    TEXT_SIZE,
} from './anchorLink.constants';
import clsx from 'clsx';
import { LineArrowSmall, OutboundLink } from '@repo/icons';

interface AnchorLinkProps {
    isExternal?: boolean;
    text: string;
    size?: AnchorLinkSize;
    inverted?: boolean;
}

export function AnchorLink({
    isExternal,
    text,
    size = AnchorLinkSize.Default,
    inverted,
}: AnchorLinkProps) {
    const textColor = inverted ? INVERTED_TEXT_COLOR : DEFAULT_TEXT_COLOR;
    const bgAndBorderColors = inverted
        ? BACKGROUND_AND_BORDER_COLORS[size].inverted
        : BACKGROUND_AND_BORDER_COLORS[size].default;
    const highlightedHoveredAndFocusedColor =
        size === AnchorLinkSize.Small
            ? inverted
                ? ANCHOR_LINK_HIGHLIGHTED_INVERTED
                : ANCHOR_LINK_HIGHLIGHTED
            : '';
    return (
        <div
            className={clsx(
                'group anchor-link state-layer hover:cursor-pointer',
                ANCHOR_LINK_PADDING[size],
                bgAndBorderColors,
                {
                    inverted: inverted && size === AnchorLinkSize.Small,
                },
            )}
        >
            <div
                className={clsx('flex flex-row justify-between items-center w-full', {
                    'py-3': size === AnchorLinkSize.Default,
                })}
            >
                <span
                    className={clsx(TEXT_SIZE[size], textColor, highlightedHoveredAndFocusedColor)}
                >
                    {text}
                </span>
                <span className={clsx('[&_svg]:h-6 [&_svg]:w-6', textColor)}>
                    {isExternal ? <OutboundLink /> : <LineArrowSmall />}
                </span>
            </div>
        </div>
    );
}
