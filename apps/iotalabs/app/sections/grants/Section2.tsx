import { FetchGrantsStatsData } from '@repo/shared/sections';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function Section2({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full bg-labs-primary-100" id={id} data-theme={theme}>
            <div className="container py-12">
                <FetchGrantsStatsData />
            </div>
        </section>
    );
}
