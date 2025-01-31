import { HiglitedHeroText } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function ProjectsOverview({ id, theme }: BaseSectionProps) {
    const TEXT =
        'With our partners and community, IOTA builds an open infrastructure for a digital economy, enabling projects to bring the advancements of Web3 to the real world.';

    return (
        <section className="w-full bg-labs-neutral-100" id={id} data-theme={theme}>
            <HiglitedHeroText text={TEXT} />
        </section>
    );
}
