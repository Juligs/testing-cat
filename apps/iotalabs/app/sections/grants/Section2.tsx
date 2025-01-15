import { FetchGrantsStatsData } from '@repo/shared/sections';
export function Section2({ id }: { id: string }) {
    return (
        <section className="w-full bg-labs-primary-100" id={id}>
            <div className="container py-12">
                <FetchGrantsStatsData />
            </div>
        </section>
    );
}
