import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, VerticalTitle } from 'react-ui-kit';
import { IOTA_FOUNDATION_TITLE_CONTENT } from './constants';
import Link from 'next/link';

export function IotaFoundation({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-labs-neutral-100"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/shared/trade_&_supply.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...IOTA_FOUNDATION_TITLE_CONTENT}>
                            <div className="flex gap-4">
                                <Actions>
                                    <Link
                                        href="https://iota-foundation.org/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Go to the Iota Foundation page"
                                    >
                                        <Button text="IOTA Foundation" icon />
                                    </Link>
                                </Actions>
                            </div>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
            </div>
        </section>
    );
}
