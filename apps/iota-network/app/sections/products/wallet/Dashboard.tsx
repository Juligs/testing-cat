import { TwoColumnsImageTemplate } from '@repo/shared/components';
import {
    DASHBOARD_VERTICAL_TITLE_CONTENT,
    DASHBOARD_ICON_CONTENT,
    DASHBOARD_BUTTONS,
} from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, IconContent, VerticalTitle } from 'react-ui-kit';
import Link from 'next/link';

export function Dashboard({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-iota-neutral-4"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/products/wallet/dashboard.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...DASHBOARD_VERTICAL_TITLE_CONTENT}>
                            <Actions>
                                <div className="flex gap-4">
                                    {DASHBOARD_BUTTONS.map((button, index) => (
                                        <Actions key={index}>
                                            <Link
                                                href={button.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Button {...button} icon inverted />
                                            </Link>
                                        </Actions>
                                    ))}
                                </div>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6">
                    {DASHBOARD_ICON_CONTENT.map((data, index) => (
                        <Link
                            key={index}
                            href={data.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="[&>div]:h-full"
                        >
                            <IconContent
                                title={data.title}
                                body={data.body}
                                icon={data.icon}
                                filled
                                inverted
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
