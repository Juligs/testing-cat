import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import { BTC_VERTICAL_TITLE } from './constants';
import { Actions, Button, VerticalTitle } from 'react-ui-kit';

export function BTC({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/news/events/btc.png" reverse>
                    <div className="sm:pl-[92px] lg:pl-[102px] text-center">
                        <VerticalTitle {...BTC_VERTICAL_TITLE}>
                            <Actions>
                                <Link
                                    href="https://icbc2025.ieee-icbc.org/workshop/nextgendlt"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button
                                        text="learn more"
                                        icon
                                        ariaLabel="Learn more about the Beyond the Chain overview"
                                    />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
            </div>
        </section>
    );
}
