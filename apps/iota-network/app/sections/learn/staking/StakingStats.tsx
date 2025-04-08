import { BaseSectionProps } from '@repo/shared/interfaces';
import { FetchIotaStakingkStats } from './subsections';

export function StakingStats({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-labs-primary-100"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-16 md:py-20">
                <FetchIotaStakingkStats />
            </div>
        </section>
    );
}
