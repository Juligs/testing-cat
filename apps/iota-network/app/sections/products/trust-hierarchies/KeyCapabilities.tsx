import {
    KEY_CAPABILITIES_HORIZONTAL_TITLE,
    KEY_CAPABILITIES_IMAGE_CARD_CONTENT,
} from './constants';
import { ImageCard, VerticalTitle } from 'react-ui-kit';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function KeyCapabilities({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30 items-center">
                <div className="max-w-[952px] text-center">
                    <VerticalTitle {...KEY_CAPABILITIES_HORIZONTAL_TITLE} isCentered />
                </div>

                <div className="gap-6 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4">
                    {KEY_CAPABILITIES_IMAGE_CARD_CONTENT.map((data, index) => (
                        <ImageCard key={index} {...data} isHoverable={false} />
                    ))}
                </div>
            </div>
        </section>
    );
}
