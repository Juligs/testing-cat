import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, HorizontalTitle } from 'react-ui-kit';
import {
    MYSTICETI_HORIZONTAL_TITLE,
    MYSTICETI_SMALL_CTA_CARD_CONTENT,
    MYSTICETI_BUTTONS,
} from './constants';
import Link from 'next/link';
import { ArrowTopRight } from '@repo/icons';
import { FetchIotaConsensusStats } from './subsections';
import { SmallCtaCard } from '@components/small-CTA-card/SmallCtaCard';

export function Mysticeti({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <HorizontalTitle {...MYSTICETI_HORIZONTAL_TITLE}>
                    <Actions>
                        {MYSTICETI_BUTTONS.map((data, index) => (
                            <Link
                                key={index}
                                href={data.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={data.ariaLabel}
                            >
                                <Button
                                    text={data.text}
                                    variant={data.variant}
                                    icon={<ArrowTopRight />}
                                />
                            </Link>
                        ))}
                    </Actions>
                </HorizontalTitle>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
                    {MYSTICETI_SMALL_CTA_CARD_CONTENT.map((data, index) => (
                        <SmallCtaCard key={index} {...data} hasSmallTitle />
                    ))}
                </div>

                <FetchIotaConsensusStats />
            </div>
        </section>
    );
}
