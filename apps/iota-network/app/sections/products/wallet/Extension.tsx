import { TwoColumnsImageTemplate } from '@repo/shared/components';
import {
    EXTENSION_VERTICAL_TITLE_CONTENT,
    EXTENSION_ICON_CONTENT,
    EXTENSION_TITLE_CONTENT,
} from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, IconContent, VerticalTitle } from 'react-ui-kit';
import Link from 'next/link';

export function Extension({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/products/wallet/extension.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...EXTENSION_VERTICAL_TITLE_CONTENT}>
                            <Actions>
                                <div className="flex gap-4">
                                    <Actions>
                                        <Link
                                            href="https://docs.iota.org/developer/standards/wallet-standard"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Go to the documentation"
                                        >
                                            <Button text="Learn more" icon />
                                        </Link>
                                    </Actions>
                                </div>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
                <VerticalTitle {...EXTENSION_TITLE_CONTENT} />
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6">
                    {EXTENSION_ICON_CONTENT.map((data, index) => (
                        <IconContent
                            key={index}
                            title={data.title}
                            body={data.body}
                            icon={data.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
