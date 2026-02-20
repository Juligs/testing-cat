import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, CtaCard, IconContent, TextLink } from 'react-ui-kit';
import { MEMBERSHIP_CTA_CARD, MEMBERSHIP_ICON_CONTENT } from './constants';
import Link from 'next/link';

export function Membership({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-12">
                <CtaCard {...MEMBERSHIP_CTA_CARD} brand aspectVideo />
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-6">
                    {MEMBERSHIP_ICON_CONTENT.map((data, index) => (
                        <IconContent key={index} title={data.title} body={data.body} filled>
                            <Actions>
                                <Link
                                    href={data.link}
                                    key={index}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="[&>div]:h-full"
                                    aria-label={`Link to ${data.title}`}
                                >
                                    <TextLink text="Learn More" showIcon />
                                </Link>
                            </Actions>
                        </IconContent>
                    ))}
                </div>
            </div>
        </section>
    );
}
