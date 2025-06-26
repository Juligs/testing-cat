import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import { CtaCard, TextLink } from 'react-ui-kit';
import { BRIDGE_LIBS_CTA_CARD_CONTENT } from './constants';

export function BridgeLibs({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 sm:py-20 lg:py-30 flex justify-center items-center w-full">
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
                    {BRIDGE_LIBS_CTA_CARD_CONTENT.map((data, index) => (
                        <CtaCard {...data} isVertical>
                            <Link
                                key={index}
                                href={data.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="[&>div]:h-full"
                                aria-label={`Link to ${data.title}`}
                            >
                                <TextLink text={data.text} showIcon inverted={data.inverted} />
                            </Link>
                        </CtaCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
