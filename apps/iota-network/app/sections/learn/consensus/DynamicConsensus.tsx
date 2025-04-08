import { ArrowTopRight } from '@repo/icons';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import { Actions, Button, VerticalTitle } from 'react-ui-kit';
import { DYNAMIC_CONSENSUS_VERTICAL_TITLE } from './constants';
import { FetchIotaConsensusStats } from './subsections';

export function DynamicConsensus({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/learn/consensus/dynamic_consensus.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...DYNAMIC_CONSENSUS_VERTICAL_TITLE}>
                            <Actions>
                                <Link
                                    href="https://docs.iota.org/about-iota/iota-architecture/consensus"
                                    target="_blank"
                                    rel="nopener noreferrer"
                                >
                                    <Button text="Learn more" icon={<ArrowTopRight />} />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
                <FetchIotaConsensusStats />
            </div>
        </section>
    );
}
