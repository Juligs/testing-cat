import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, HorizontalTitle, Image } from 'react-ui-kit';
import { IOTA_ECONOMY_HORIZONTAL_TITLE } from './constants';
import Link from 'next/link';

export function IotaEconomy({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-6 xs:gap-14 sm:gap-20">
                <div className="sm:pr-[92px] lg:pr-[102px]">
                    <HorizontalTitle {...IOTA_ECONOMY_HORIZONTAL_TITLE}>
                        <Actions>
                            <Link
                                href="https://docs.iota.org/about-iota/tokenomics/"
                                aria-label="Go to the documentation"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button text="Docs" icon />
                            </Link>
                        </Actions>
                    </HorizontalTitle>
                </div>

                <div className="w-full grid place-items-center">
                    <Image
                        src="/learn/tokenomics/iota_economy.png"
                        alt="Iota Economy at a Glance"
                        className="max-w-full max-h-full"
                    />
                </div>
            </div>
        </section>
    );
}
