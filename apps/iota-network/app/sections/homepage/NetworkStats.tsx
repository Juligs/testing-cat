import { BaseSectionProps } from '@repo/shared/interfaces';
import { DisplayStats } from 'react-ui-kit';
import { NETWORK_STATS } from './constants';

export function NetworkStats({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-labs-primary-100"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-16 md:py-20">
                <div className="flex flex-col xs:flex-row justify-center items-center gap-6">
                    {NETWORK_STATS.map((stats) => (
                        <DisplayStats key={stats.label} {...stats} />
                    ))}
                </div>
            </div>
        </section>
    );
}
