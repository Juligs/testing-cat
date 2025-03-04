import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import { ImageCard, ImageCardSize, VerticalTitle } from 'react-ui-kit';
import { EXPLORE_IOTA_IMAGE_CARD_CONTENT, EXPLORE_IOTA_VERTICAL_TITLE } from './constants';

export function ExploreIota({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-color-gradient"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="max-w-[464px] md:min-w-[464px]">
                    <VerticalTitle {...EXPLORE_IOTA_VERTICAL_TITLE} />
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
                    {EXPLORE_IOTA_IMAGE_CARD_CONTENT.map((data, index) => (
                        <Link
                            href={data.link}
                            key={index}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="[&>div]:h-full"
                            aria-label={`Link to ${data.title}`}
                        >
                            <ImageCard
                                key={index}
                                title={data.title}
                                subtitle={data.subtitle}
                                image={data.image}
                                size={ImageCardSize.Small}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
