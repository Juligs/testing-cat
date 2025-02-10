import { FetchGrantsStatsData } from '@repo/shared/sections';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function GrantsStats({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-labs-primary-100"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-12">
                <FetchGrantsStatsData />
            </div>
        </section>
    );
}
