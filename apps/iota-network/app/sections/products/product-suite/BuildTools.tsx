'use client';

import { BaseSectionProps } from '@repo/shared/interfaces';
import { BUILD_CONTENT_EVM, BUILD_CONTENT_MAINNET } from './constants';
import { MainnetTrustFrameworkTabs, useMainnetEvmTab } from './components';
import { ImageCard } from 'react-ui-kit';
import Link from 'next/link';
import { ContactUsWithIcons } from '@components/contact-us-with-icons';
import clsx from 'clsx';

export function BuildTools({ id, navbarColorScheme }: BaseSectionProps) {
    const { activeTab, setActiveTab, isMainnet } = useMainnetEvmTab();

    const currentData = isMainnet ? BUILD_CONTENT_MAINNET : BUILD_CONTENT_EVM;

    const isImageCards = currentData.filter((item) => item.isImageCard === true);
    const hasImageCards = isImageCards.length > 0;
    const ctas = currentData.filter((item) => item.isImageCard === false);
    const gridClasses = hasImageCards
        ? 'grid grid-cols-1 sm:grid-cols-2'
        : 'grid grid-cols-1 sm:flex xs:flex-row max-w-[708px] h-full xs:h-[324px]';

    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container flex flex-col gap-14 items-center">
                <MainnetTrustFrameworkTabs
                    activeTab={activeTab}
                    onChange={setActiveTab}
                    sectionTitle="Build Tools"
                />
                <div className={clsx('w-full gap-6', gridClasses)}>
                    <div className="flex flex-row gap-6 w-full">
                        {ctas.map((data, index) => (
                            <Link
                                key={index}
                                href={data.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="[&>div]:h-full"
                            >
                                <ContactUsWithIcons
                                    key={index}
                                    {...data}
                                    isCentered
                                    lightBackground
                                    hasContactButtons={false}
                                />
                            </Link>
                        ))}
                    </div>
                    {isImageCards && (
                        <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
                            {isImageCards.map((data, index) => (
                                <Link
                                    key={index}
                                    href={data.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="[&>div]:h-full"
                                >
                                    <ImageCard {...data} isHighlighted />
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
