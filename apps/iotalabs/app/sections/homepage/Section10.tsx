import { BuildingCTA } from '@components';

export function Section10({ id }: { id: string }) {
    return (
        <section className="w-full bg-labs-neutral-100" id={id}>
            <BuildingCTA />
        </section>
    );
}
