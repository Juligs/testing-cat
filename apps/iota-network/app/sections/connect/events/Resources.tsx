import { BaseSectionProps } from '@repo/shared/interfaces';
import { ImageCard, TitleTextSize, VerticalTitle } from 'react-ui-kit';
import { RESOURCES_IMAGE_CARD_CONTENT } from './constants';
import Link from 'next/link';

export function Resources({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-6 xs:gap-12">
                <VerticalTitle title={'Resources'} size={TitleTextSize.ExtraSmall} />
                <div className="flex flex-row">
                    <Link
                        href={RESOURCES_IMAGE_CARD_CONTENT.link}
                        aria-label="Go to the assets library"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <ImageCard {...RESOURCES_IMAGE_CARD_CONTENT} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
