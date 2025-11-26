import { Actions, CtaCard, TextLink } from 'react-ui-kit';
import { CTA_CONTENT } from './teamContactCTAContent.constants';
import Link from 'next/link';
import { BaseSectionProps } from '@repo/shared/interfaces';
import clsx from 'clsx';

interface TeamContactCTAProps extends BaseSectionProps {
    small?: boolean;
}

export function TeamContactCTA({ id, navbarColorScheme, small }: TeamContactCTAProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div
                className={clsx(
                    'container grid grid-cols-1 sm:grid-cols-2 gap-6',
                    small ? 'py-10 xs:py-16 lg:py-20' : 'py-14 xs:py-20 lg:py-30',
                )}
            >
                {CTA_CONTENT.map((cta) => (
                    <CtaCard key={cta.title} {...cta} isVertical>
                        <Actions>
                            {cta.links.map((links) => (
                                <Link
                                    key={links.text}
                                    href={links.link}
                                    aria-label={`Link to ${links.text}`}
                                    target={links.isExternal ? '_blank' : '_self'}
                                >
                                    <TextLink text={links.text} showIcon />
                                </Link>
                            ))}
                        </Actions>
                    </CtaCard>
                ))}
            </div>
        </section>
    );
}
