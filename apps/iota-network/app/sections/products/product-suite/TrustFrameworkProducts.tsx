'use client';

import { BaseSectionProps } from '@repo/shared/interfaces';
import { CTA_EVM, CTA_MAINNET } from './constants';
import { MainnetTrustFrameworkTabs, useMainnetEvmTab } from './components';
import { SmallCtaCard } from '@components/small-CTA-card/SmallCtaCard';
import Link from 'next/link';

export function TrustFrameworkProducts({ id, navbarColorScheme }: BaseSectionProps) {
    const { activeTab, setActiveTab, isMainnet } = useMainnetEvmTab();

    const currentData = isMainnet ? CTA_MAINNET : CTA_EVM;
    const sectionTitle = isMainnet ? 'Trust Framework' : 'Frameworks';

    const gridClasses = isMainnet
        ? 'grid grid-cols-1 xs:grid-cols-2 gap-8 w-full'
        : 'grid grid-cols-1 max-w-[708px] sm:w-full';

    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container pb-14 sm:pb-20 lg:pb-30 flex flex-col gap-14 items-center">
                <MainnetTrustFrameworkTabs
                    activeTab={activeTab}
                    onChange={setActiveTab}
                    sectionTitle={sectionTitle}
                />

                <div className={gridClasses}>
                    {currentData.map((data, index) => (
                        <Link key={data.title} href={data.link} className="[&>div]:h-full">
                            <SmallCtaCard {...data} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
