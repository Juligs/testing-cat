import { TwoColumnsImageTemplate } from '@repo/shared/components';
import {
    IOTA_WALLET_VERTICAL_TITLE_CONTENT,
    IOTA_WALLET_ICON_CONTENT,
    IOTA_WALLET_BUTTONS,
} from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, IconContent, TextLink, VerticalTitle } from 'react-ui-kit';
import Link from 'next/link';

export function IotaWallet({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/products/wallet/wallet.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...IOTA_WALLET_VERTICAL_TITLE_CONTENT}>
                            <Actions>
                                <div className="flex gap-4">
                                    {IOTA_WALLET_BUTTONS.map((button, index) => (
                                        <Actions key={index}>
                                            <Link
                                                href={button.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Button {...button} icon />
                                            </Link>
                                        </Actions>
                                    ))}
                                </div>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
                <div className="grid grid-cols-1 xs:grid-cols-3 gap-6">
                    {IOTA_WALLET_ICON_CONTENT.map((data, index) => (
                        <IconContent
                            key={index}
                            title={data.title}
                            body={data.body}
                            icon={data.icon}
                            filled
                        >
                            <Link href={data.link} target="_blank" rel="noopener noreferrer">
                                <TextLink text="Learn more" showIcon />
                            </Link>
                        </IconContent>
                    ))}
                </div>
            </div>
        </section>
    );
}
