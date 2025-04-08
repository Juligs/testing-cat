import Link from 'next/link';
import { CtaCard, TextLink } from 'react-ui-kit';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { JOIN_US_BUILDING_CTA_CONTENT, JOIN_US_BUILDING_TEXT_LINKS_CTA } from './constants';

export function JoinUsBuildingCTA({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex justify-center items-center w-full">
                <CtaCard {...JOIN_US_BUILDING_CTA_CONTENT}>
                    <div className="flex gap-6 flex-wrap">
                        {JOIN_US_BUILDING_TEXT_LINKS_CTA.map(({ text, link }, index) => (
                            <Link
                                key={index}
                                href={link}
                                target={link.startsWith('/') ? undefined : '_blank'}
                                rel={link.startsWith('/') ? undefined : 'noopener noreferrer'}
                                aria-label={text}
                            >
                                <TextLink text={text} showIcon inverted />
                            </Link>
                        ))}
                    </div>
                </CtaCard>
            </div>
        </section>
    );
}
