import { BuildingCTA } from '@components';

export function Section3({ id }: { id: string }) {
    return (
        <section className="w-full bg-labs-neutral-100" id={id}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <BuildingCTA />
            </div>
        </section>
    );
}
