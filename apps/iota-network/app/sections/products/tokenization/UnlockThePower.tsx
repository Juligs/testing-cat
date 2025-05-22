import {
    UNLOCK_THE_POWER_HORIZONTAL_TITLE,
    UNLOCK_THE_POWER_IMAGE_CARD_CONTENT,
} from './constants';
import { HorizontalTitle, ImageCard } from 'react-ui-kit';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function UnlockThePower({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <HorizontalTitle {...UNLOCK_THE_POWER_HORIZONTAL_TITLE} />

                <div className="gap-6 grid grid-cols-1 xs:grid-cols-3">
                    {UNLOCK_THE_POWER_IMAGE_CARD_CONTENT.map((data, index) => (
                        <ImageCard key={index} {...data} isHoverable={false} />
                    ))}
                </div>
            </div>
        </section>
    );
}
