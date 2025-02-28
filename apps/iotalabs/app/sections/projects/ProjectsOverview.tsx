import { HighlightedHeroText } from '@components';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function ProjectsOverview({ id, navbarColorScheme }: BaseSectionProps) {
    const TEXT =
        'With our partners and community, IOTA builds an open infrastructure for a digital economy, enabling projects to bring the advancements of Web3 to the real world.';

    return (
        <section
            className="w-full bg-labs-neutral-100"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <HighlightedHeroText text={TEXT} />
        </section>
    );
}
