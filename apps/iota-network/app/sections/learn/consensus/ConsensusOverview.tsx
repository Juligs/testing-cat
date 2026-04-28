import { BaseSectionProps } from '@repo/shared/interfaces';

const CONSENSUS_OVERVIEW =
    'Built for real-world conditions – unpredictable network speeds and spikes in demand. Starfish strengthens IOTA for enterprise and global-scale use.';

export function ConsensusOverview({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-10 xs:py-16 lg:py-20 flex justify-center text-center">
                <p className="text-title-md text-darkest max-w-sm xs:max-w-3xl sm:max-w-lg lg:max-w-xl xl:max-w-[708px]">
                    {CONSENSUS_OVERVIEW}
                </p>
            </div>
        </section>
    );
}
