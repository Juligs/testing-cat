import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import { CtaCard, VerticalTitle } from 'react-ui-kit';
import {
    INTEGRATION_STACK_CTA_CARD_CONTENT,
    INTEGRATION_STACK_VERTICAL_TITLE_CONTENT,
} from './constants';

export function IntegrationStackProducts({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 sm:py-20 lg:py-30 flex justify-center items-center flex-col gap-14 w-full">
                <div className="w-full text-center">
                    <VerticalTitle {...INTEGRATION_STACK_VERTICAL_TITLE_CONTENT} />
                </div>
                <div className="flex flex-col gap-6 w-full h-full">
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
                        {INTEGRATION_STACK_CTA_CARD_CONTENT.map((data, index) => (
                            <Link
                                key={index}
                                href={data.link}
                                className="[&>div]:h-full"
                                aria-label={`Link to ${data.title}`}
                            >
                                <CtaCard
                                    title={data.title}
                                    subtitle={data.subtitle}
                                    animation={data.animation}
                                    brand
                                    isVertical
                                ></CtaCard>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
