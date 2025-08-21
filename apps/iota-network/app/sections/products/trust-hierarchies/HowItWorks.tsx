import { BaseSectionProps } from '@repo/shared/interfaces';
import { CtaCard, IconContent, VerticalTitle } from 'react-ui-kit';
import {
    HOW_IT_WORKS_ICON_CONTENT,
    HOW_IT_WORKS_CTA_CARD_CONTENT,
    HOW_IT_WORKS_VERTICAL_TITLE_CONTENT,
} from './constants';
import Link from 'next/link';

export function HowItWorks({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex justify-center items-center flex-col gap-14 xs:gap-20 sm:gap-30 w-full">
                <div className="max-w-[700px]">
                    <VerticalTitle {...HOW_IT_WORKS_VERTICAL_TITLE_CONTENT} isCentered />
                </div>
                <div className="flex flex-col gap-6 w-full h-full">
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
                        {HOW_IT_WORKS_CTA_CARD_CONTENT.map((data, index) => (
                            <Link
                                key={index}
                                href={data.link}
                                aria-label="Go to the docs"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <CtaCard {...data} isVertical />
                            </Link>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 xs:grid-cols-3 gap-6">
                        {HOW_IT_WORKS_ICON_CONTENT.map((data, index) => (
                            <Link
                                key={index}
                                href={data.link}
                                aria-label="Go to the docs"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IconContent {...data} filled />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
