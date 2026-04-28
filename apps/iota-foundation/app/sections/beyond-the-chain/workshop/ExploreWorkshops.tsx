import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import { ExploreCard } from 'react-ui-kit';

type ExploreWorkshopsProps = BaseSectionProps & {
    activeYear?: string;
};

export const EXPLORE_WORKSHOP = [
    {
        year: '2025',
        title: 'Beyond the Chain 2025',
        subtitle: 'IEEE International Conference on Blockchain and Cryptocurrency, Pisa',
        link: '/beyond-the-chain/workshop-highlights/2025',
    },
    {
        year: '2024',
        title: 'Beyond the Chain 2024',
        subtitle: 'IEEE International Conference on Blockchain and Cryptocurrency, Dublin, Ireland',
        link: '/beyond-the-chain/workshop-highlights/2024',
    },
    {
        year: '2023',
        title: 'Beyond the Chain 2023',
        subtitle: 'BLOCKCHAIN Congress, Guimarães, Portugal',
        link: '/beyond-the-chain/workshop-highlights/2023',
    },
];

export function ExploreWorkshops({ id, navbarColorScheme, activeYear }: ExploreWorkshopsProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30">
                <div className="grid grid-cols-1 xs:grid-cols-3 gap-6">
                    {EXPLORE_WORKSHOP.map(({ year, title, subtitle, link }) => (
                        <Link
                            scroll={false}
                            href={link}
                            key={year}
                            className="[&>div]:h-full"
                            aria-label={`Explore ${title}`}
                        >
                            <ExploreCard
                                title={title}
                                subtitle={subtitle}
                                inverted={activeYear === year}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
