'use client';

import { BaseSectionProps } from '@repo/shared/interfaces';
import { SERVICES_IMAGE_CARD_EVM, SERVICES_IMAGE_CARD_MAINNET } from './constants';
import { MainnetTrustFrameworkTabs, useMainnetEvmTab } from './components';
import { ImageCard } from 'react-ui-kit';
import clsx from 'clsx';
import Link from 'next/link';

export function ServicesDapps({ id, navbarColorScheme }: BaseSectionProps) {
    const { activeTab, setActiveTab, isMainnet } = useMainnetEvmTab();

    const currentData = isMainnet ? SERVICES_IMAGE_CARD_MAINNET : SERVICES_IMAGE_CARD_EVM;

    const gridClasses = isMainnet
        ? 'grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 '
        : 'grid grid-cols-1 xs:grid-cols-2 max-w-[708px]';

    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container pb-14 sm:pb-20 lg:pb-30 flex flex-col gap-14 xs:items-center">
                <MainnetTrustFrameworkTabs
                    activeTab={activeTab}
                    onChange={setActiveTab}
                    sectionTitle="Services & dApps"
                />

                <div className={clsx('gap-6 w-full xs:justify-items-center', gridClasses)}>
                    {currentData.map((data, index) => (
                        <Link
                            key={index}
                            href={data.link}
                            target={data.isExternal ? '_blank' : undefined}
                            rel={data.isExternal ? 'noopener noreferrer' : undefined}
                            className="[&>div]:h-full"
                        >
                            <ImageCard {...data} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
