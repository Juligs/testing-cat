import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle, IconContent, Actions, Button } from 'react-ui-kit';
import { WHY_TOKENIZED_VERTICAL_TITLE, WHY_TOKENIZED_ICON_CONTENT } from './constants';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import Link from 'next/link';
import { ArrowTopRight } from '@repo/icons';

export function WhyTokenizedWithIOTA({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/products/tokenization/why_tokenized.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...WHY_TOKENIZED_VERTICAL_TITLE}>
                            <Actions>
                                <Link
                                    href="https://docs.iota.org/developer/standards"
                                    target="_blank"
                                    arial-label="Go to the documentation"
                                >
                                    <Button text="Get started" icon={<ArrowTopRight />} />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6">
                    {WHY_TOKENIZED_ICON_CONTENT.map((data, index) => (
                        <IconContent key={index} {...data} />
                    ))}
                </div>
            </div>
        </section>
    );
}
