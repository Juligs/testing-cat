import { DisplayStats } from 'react-ui-kit';
import { BaseSectionProps } from '../../interfaces';
import { ComponentProps } from 'react';

type StatsProposalsProps = BaseSectionProps & {
    stats: ComponentProps<typeof DisplayStats>[];
};

export function StatsProposals({ id, navbarColorScheme, stats }: StatsProposalsProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="pb-14 xs:pb-20 lg:pb-30 flex justify-center text-center">
                <div className=" flex flex-col xs:flex-row justify-center gap-6 w-full">
                    {stats.map((stat) => (
                        <DisplayStats key={stat.label} {...stat} />
                    ))}
                </div>
            </div>
        </section>
    );
}
