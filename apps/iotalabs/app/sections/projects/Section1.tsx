import { HiglitedHeroTextSection } from '@shared/components';

export function Section1({ id }: { id: string }) {
    const TEXT =
        'With our partners and community, IOTA builds an open infrastructure for a digital economy, enabling projects to bring the advancements of Web3 to the real world.';

    return (
        <section className="w-full bg-labs-neutral-100" id={id}>
            <HiglitedHeroTextSection text={TEXT} />
        </section>
    );
}
