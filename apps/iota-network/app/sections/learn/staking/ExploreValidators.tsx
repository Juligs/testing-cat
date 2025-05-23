import {
    EXPLORE_VALIDATORS_VERTICAL_TITLE,
    EXPLORE_VALIDATORS_IMAGE_CARD_CONTENT,
} from './constants';
import { ImageCard, ImageCardSize, VerticalTitle } from 'react-ui-kit';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import { TwoColumnsImageTemplate } from '@repo/shared/components';

export function EploreValidators({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/learn/staking/explore-validators/explore_validators_cta.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center max-w-[581px]">
                        <VerticalTitle {...EXPLORE_VALIDATORS_VERTICAL_TITLE} />
                    </div>
                </TwoColumnsImageTemplate>
                <div className="gap-6 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4">
                    {EXPLORE_VALIDATORS_IMAGE_CARD_CONTENT.map((data, index) => (
                        <Link
                            key={index}
                            href={data.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="[&>div]:h-full"
                            aria-label={`Link to ${data.title}`}
                        >
                            <ImageCard {...data} size={ImageCardSize.Small} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
