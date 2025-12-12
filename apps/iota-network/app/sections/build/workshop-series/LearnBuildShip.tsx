import { LEARN_BUILD_SHIP_DISPLAY_STATS_CONTENT } from './constants';
import { CardSize, DisplayStats, TextSize } from 'react-ui-kit';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { SeamlessIntegrationWithWeb3 } from '@repo/icons';
import { Separator } from '@components/separator';

export function LearnBuildShip({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-row justify-between text-network-primary-20 items-center pb-8">
                        <p className="text-display-sm">Learn. Build. Ship.</p>
                        <div className="p-[11px]">
                            <SeamlessIntegrationWithWeb3 className="w-[110px] h-[110px]" />
                        </div>
                    </div>
                    <Separator borderColor="border-transparency-black-32" />
                    <div className="flex flex-col gap-6 sm:flex-row sm:justify-between text-darkest">
                        <p className="text-title-md max-w-[400px]">
                            Learn and build with IOTA, Move, and the Trust Framework
                        </p>
                        <p className="text-body-lg max-w-[464px]">
                            Learn by doing with flexible, self-paced modules built for any
                            experience level. Use them for solo learning or live sessions, with new
                            content released as the IOTA ecosystem evolves.
                        </p>
                    </div>
                </div>

                <div className="gap-6 grid grid-cols-1 sm:grid-cols-3">
                    {LEARN_BUILD_SHIP_DISPLAY_STATS_CONTENT.map((data, index) => (
                        <DisplayStats
                            key={index}
                            {...data}
                            textSize={TextSize.Default}
                            size={CardSize.Small}
                            isMultiLine
                            textHighlighted
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
