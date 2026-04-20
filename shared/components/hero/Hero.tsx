'use client';
import clsx from 'clsx';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import {
    Button,
    HeroBackground,
    HeroLayout,
    HeroType,
    TitleTextSize,
    VerticalTitle,
} from 'react-ui-kit';
import { RenderAnchorLinks } from './RenderAnchorLinks';
import { LinkProps, RenderButtons } from './RenderButtons';
import { HeroAlignment } from './hero.enums';
import Link from 'next/link';

interface HeroProps {
    verticalTitle: React.ComponentProps<typeof VerticalTitle>;
    type?: HeroType;
    anchorLinks?: {
        text: string;
        link?: string;
        onClick?: () => void;
        isExternal?: boolean;
    }[];
    isAnchorLinksMobileInverted?: boolean;
    isAnchorLinksDesktopInverted?: boolean;
    image?: string | null;
    buttons?: (React.ComponentProps<typeof Button> & {
        link: string;
        isExternal?: boolean;
    })[];
    background?: React.ComponentProps<typeof HeroBackground>;
    layout?: HeroAlignment;
}

export function Hero({
    type = HeroType.Default,
    anchorLinks,
    image,
    buttons,
    isAnchorLinksMobileInverted,
    isAnchorLinksDesktopInverted,
    background,
    verticalTitle,
    layout = HeroAlignment.Centered,
}: HeroProps): React.JSX.Element {
    const heroRef = useRef<HTMLDivElement>(null);
    const [viewportHeight, setViewportHeight] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const updateHeight = () => {
            const isMobileNow = window.innerWidth < 712;
            setIsMobile(isMobileNow);
            setViewportHeight(isMobileNow ? window.screen.height : window.innerHeight);
        };

        updateHeight();

        window.addEventListener('resize', updateHeight);
        window.addEventListener('orientationchange', updateHeight);

        return () => {
            window.removeEventListener('resize', updateHeight);
            window.removeEventListener('orientationchange', updateHeight);
        };
    }, []);

    const { size: verticalTitleSize, ...verticalTitleProps } = verticalTitle;

    const textSize = verticalTitleSize
        ? verticalTitleSize
        : type === HeroType.Large
          ? TitleTextSize.Large
          : TitleTextSize.Medium;

    const isCenteredClass =
        layout === HeroAlignment.Left
            ? 'grid grid-cols-1 sm:grid-cols-2'
            : 'flex flex-row justify-center xs:max-w-[780px] md:max-w-[900px]';

    return (
        <>
            <div
                ref={heroRef}
                style={{
                    minHeight:
                        type === HeroType.Large || isMobile
                            ? viewportHeight
                                ? `${viewportHeight}px`
                                : '100vh'
                            : '820px',
                }}
                className="w-full flex flex-col justify-center items-center"
            >
                <HeroLayout hasGradientBackground={!background} type={type}>
                    {background && <HeroBackground {...background} />}
                    <div className={clsx('gap-10 xs:gap-6 w-full items-center', isCenteredClass)}>
                        <VerticalTitle
                            {...verticalTitleProps}
                            size={textSize}
                            isCentered={layout === HeroAlignment.Centered}
                        >
                            {buttons && <RenderButtons buttons={buttons} Link={Link} />}
                        </VerticalTitle>
                        {image && layout === HeroAlignment.Left && (
                            <div className="w-full aspect-[4/3] items-center flex">
                                <img src={image} alt="Hero Image" width={708} height="auto" />
                            </div>
                        )}
                    </div>
                    {anchorLinks && (
                        <div className="hidden sm:flex absolute container bottom-0 left-1/2 -translate-x-1/2">
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
