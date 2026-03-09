import { BaseSectionProps } from '@repo/shared/interfaces';
import { HorizontalTitle, ImageCard } from 'react-ui-kit';
import { STAKING_GET_STARTED_TITLE, STAKING_GET_STARTED_CONTENT } from './constants';
import Link from 'next/link';

export function StakingGetStarted({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container pt-14 xs:pt-20 lg:pt-30 flex flex-col gap-14 xs:gap-20 sm:gap-30 w-full">
                <HorizontalTitle {...STAKING_GET_STARTED_TITLE} />
                <div className="grid grid-cols-1 xs:grid-cols-3 gap-6">
                    {STAKING_GET_STARTED_CONTENT.map((data, index) => (
                        <Link
                            key={index}
                            href={data.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="[&>div]:h-full"
                        >
                            <ImageCard {...data} isHoverable={false} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
