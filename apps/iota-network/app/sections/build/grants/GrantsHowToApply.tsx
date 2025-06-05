import Link from 'next/link';
import { CtaCard, IconContent, TextLink } from 'react-ui-kit';
import { BaseSectionProps } from '@repo/shared/interfaces';
import {
    HOW_TO_APPLY_CTA_CONTENT,
    HOW_TO_APPLY_TEXT_LINKS_CTA,
    HOW_TO_APPLY_ICON_CONTENT,
} from './constants';

export function GrantsHowToApply({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30 justify-center items-center w-full">
                <CtaCard {...HOW_TO_APPLY_CTA_CONTENT} aspectVideo>
                    <div className="flex gap-6 flex-wrap">
                        {HOW_TO_APPLY_TEXT_LINKS_CTA.map(({ text, link }, index) => (
                            <Link
                                key={index}
                                href={link}
                                target={link.startsWith('/') ? undefined : '_blank'}
                                rel={link.startsWith('/') ? undefined : 'noopener noreferrer'}
                                aria-label={text}
                            >
                                <TextLink text={text} showIcon />
                            </Link>
                        ))}
                    </div>
                </CtaCard>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-6">
                    {HOW_TO_APPLY_ICON_CONTENT.map((data, index) => (
                        <IconContent key={index} {...data} filled />
                    ))}
                </div>
            </div>
        </section>
    );
}
