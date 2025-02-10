import { TwoColumnsImageTemplate } from '../two-columns-template';
import clsx from 'clsx';
import {
    HeroLayout,
    HeroSize,
    TitleTextSize,
    VerticalTitle,
    Button,
    HeroBackground,
} from 'react-ui-kit';
import type { ImageProps } from 'next/image';
import React from 'react';
import { RenderButtons } from './RenderButtons';
import { LinkProps } from './RenderButtons';
import { RenderAnchorLinks } from './RenderAnchorLinks';

interface HeroProps {
    verticalTitle: React.ComponentProps<typeof VerticalTitle>;
    size?: HeroSize;
    anchorLinks?: {
        text: string;
        link?: string;
        onClick?: () => void;
        isExternal?: boolean;
    }[];
    isAnchorLinksMobileInverted?: boolean;
    isAnchorLinksDesktopInverted?: boolean;
    linkComponent?: (props: LinkProps) => React.ReactNode;
    imageComponent?: (props: ImageProps) => React.ReactNode;
    buttons?: (React.ComponentProps<typeof Button> & {
        link: string;
        isExternal?: boolean;
    })[];
    background?: React.ComponentProps<typeof HeroBackground>;
    image?: string;
    isCentered?: boolean;
}

export function Hero({
    size = HeroSize.Large,
    anchorLinks,
    linkComponent,
    imageComponent,
    buttons,
    isAnchorLinksMobileInverted,
    isAnchorLinksDesktopInverted,
    background,
    image,
    verticalTitle,
}: HeroProps): React.JSX.Element {
    const rounded = size === HeroSize.Large && anchorLinks ? 'rounded-b-4xl sm:rounded-b-none' : '';
    const Link = linkComponent
        ? linkComponent
        : ({ href, children, ...rest }: React.PropsWithChildren<LinkProps>) => (
              <a href={href as string} {...rest}>
                  {children}
              </a>
          );

    const { isCentered = true, size: verticalTitleSize, ...verticalTitleProps } = verticalTitle;
    const verticalTitleWitdh = size === HeroSize.ExtraLarge ? 'w-full xs:max-w-[780px]' : 'w-full';

    const mainContainer = anchorLinks
        ? 'w-full h-screen min-h-[900px] flex flex-col justify-center items-center'
        : 'w-full h-screen min-h-[900px]';

    const isTwoColumns = image ? '' : 'sm:max-w-3xl xl:max-w-5xl';
    const textSize = verticalTitleSize
        ? verticalTitleSize
        : image
          ? TitleTextSize.Medium || size === HeroSize.ExtraLarge
              ? TitleTextSize.Large
              : TitleTextSize.Medium
          : size === HeroSize.Large || size === HeroSize.ExtraLarge
            ? TitleTextSize.Large
            : TitleTextSize.Medium;

    return (
        <>
            <div className={clsx(mainContainer)}>
                <HeroLayout hasGradientBackground={!background} size={size}>
                    {background && <HeroBackground {...background} className={rounded} />}
                    <div className={clsx(isTwoColumns)}>
                        {image ? (
                            <TwoColumnsImageTemplate
                                image={image}
                                imageComponent={imageComponent}
                                reverse
                            >
                                <div className="w-full sm:pr-[92px] lg:pr-[102px] items-start">
                                    <VerticalTitle
                                        {...verticalTitleProps}
                                        size={textSize}
                                        isCentered={isCentered}
                                    >
                                        {buttons && <RenderButtons buttons={buttons} Link={Link} />}
                                    </VerticalTitle>
                                </div>
                            </TwoColumnsImageTemplate>
                        ) : (
                            <div className={clsx(verticalTitleWitdh)}>
                                <VerticalTitle
                                    {...verticalTitleProps}
                                    size={textSize}
                                    isCentered={isCentered}
                                >
                                    {buttons && <RenderButtons buttons={buttons} Link={Link} />}
                                </VerticalTitle>
                            </div>
                        )}
                        {anchorLinks && (
                            <div className="hidden sm:flex absolute container bottom-0 left-1/2 -translate-x-1/2 ">
                                <div className="flex gap-6 justify-center items-center w-full py-6">
                                    <RenderAnchorLinks
                                        anchorLinks={anchorLinks}
                                        Link={Link}
                                        inverted={isAnchorLinksDesktopInverted}
                                        className="w-full"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </HeroLayout>
            </div>

            {anchorLinks && (
                <div className="container flex flex-col sm:hidden gap-4 py-6 px-4 w-full">
                    <RenderAnchorLinks
                        anchorLinks={anchorLinks}
                        Link={Link}
                        inverted={isAnchorLinksMobileInverted}
                        className="flex-col"
                    />
                </div>
            )}
        </>
    );
}
