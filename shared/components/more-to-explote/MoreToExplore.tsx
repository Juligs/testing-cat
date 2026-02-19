import { ExploreCard } from 'react-ui-kit';
import { VerticalTitle } from 'react-ui-kit';
import { TitleTextSize } from 'react-ui-kit';
import React from 'react';
import clsx from 'clsx';

export interface moreToExploreProps {
    text: string;
    content: (React.ComponentProps<typeof ExploreCard> & {
        link: string;
        isExternal?: boolean;
    })[];
    hasSmallPadding?: boolean;
}
export function MoreToExplore({ text, content, hasSmallPadding }: moreToExploreProps): JSX.Element {
    return (
        <div
            className={clsx(
                'container py-14 xs:py-20 flex flex-col gap-6 xs:gap-12',
                hasSmallPadding ? '' : 'lg:py-30',
            )}
        >
            <VerticalTitle title={text} size={TitleTextSize.ExtraSmall} />
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
                {content.map((data, index) => (
                    <a
                        href={data.link}
                        key={index}
                        target={data.isExternal ? '_blank' : '_self'}
                        rel={data.isExternal ? 'noopener noreferrer' : undefined}
                        className="[&>div]:h-full"
                        aria-label="Explore more"
                    >
                        <ExploreCard key={index} title={data.title} subtitle={data.subtitle} />
                    </a>
                ))}
            </div>
        </div>
    );
}
