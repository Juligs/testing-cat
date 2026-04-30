import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle, IconContent, Actions, Button } from 'react-ui-kit';
import { CUSTOMIZATION_VERTICAL_TITLE, CUSTOMIZATION_ICON_CONTENT } from './constants';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import Link from 'next/link';

export function Customization({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/products/tokenization/customization.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...CUSTOMIZATION_VERTICAL_TITLE}>
                            <Actions>
                                <Link
                                    href="https://docs.iota.org/developer/advanced/asset-tokenization"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Explore asset tokenization on IOTA"
                                >
                                    <Button text="Learn more" icon />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
                <div className="grid grid-cols-1 xs:grid-cols-3  gap-6">
                    {CUSTOMIZATION_ICON_CONTENT.map((data, index) => (
                        <IconContent key={index} {...data} />
                    ))}
                </div>
            </div>
        </section>
    );
}
