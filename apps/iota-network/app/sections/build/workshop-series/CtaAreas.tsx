import { Actions, CtaCard, TextLink } from 'react-ui-kit';
import { CTA_AREAS_CONTENT } from './constants';
import Link from 'next/link';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function CtaAreas({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
            className="bg-[url('/build/workshop-series/cta-areas/areas.png')] bg-cover bg-center bg-no-repeat"
        >
            <div className="container py-12 items-center justify-center flex flex-col">
                <div className="max-w-[1000px] w-full items-center grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center [&>div]:h-full">
                    {CTA_AREAS_CONTENT.map((cta) => (
                        <CtaCard key={cta.title} {...cta} isVertical inverted>
                            <Actions>
                                {cta.links.map((links) => (
                                    <Link
                                        key={links.text}
                                        href={links.link}
                                        aria-label={`Link to ${links.text}`}
                                    >
                                        <TextLink text={links.text} showIcon inverted />
                                    </Link>
                                ))}
                            </Actions>
                        </CtaCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
