import { BaseSectionProps } from '@repo/shared/interfaces';
import { CtaCard, TitleTextSize, VerticalTitle } from 'react-ui-kit';
import { SECRET_STORAGE_CTA_CARD_CONTENT } from './constants';

export function SecretStorage({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-iota-neutral-98"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-10 xs:py-16 lg:py-20 flex flex-col gap-14 xs:gap-20 sm:gap-30 text-center items-center justify-center">
                <div className="max-w-[586px]">
                    <VerticalTitle
                        title="Consensus built for real-world demand"
                        isCentered
                        size={TitleTextSize.Small}
                    />
                </div>
                <div className="w-full flex justify-center">
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-6 justify-center">
                        {SECRET_STORAGE_CTA_CARD_CONTENT.map((data, index) => (
                            <div key={index} className="flex justify-center">
                                <div className="max-w-[586px] [&>div]:h-full">
                                    <CtaCard {...data} isVertical />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
