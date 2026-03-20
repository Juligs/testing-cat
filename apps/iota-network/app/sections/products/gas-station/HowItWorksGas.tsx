import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle, Actions, Button, ImageCard } from 'react-ui-kit';
import { HOW_IT_WORKS_VERTICAL_TITLE, HOW_IT_WORKS_IMAGE_CARD_CONTENT } from './constants';
import Link from 'next/link';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { ArrowTopRight } from '@repo/icons';

export function HowItWorksGas({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/products/gas-station/how_it_works_gas.png">
                    <div className="sm:pr-[80px] text-center">
                        <VerticalTitle {...HOW_IT_WORKS_VERTICAL_TITLE}>
                            <Actions>
                                <Link
                                    href="https://docs.iota.org/operator/gas-station/architecture/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Go to the documentation"
                                >
                                    <Button text="Learn more" icon={<ArrowTopRight />} />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
                <div className="grid grid-cols-1 xs:grid-cols-3 gap-6">
                    {HOW_IT_WORKS_IMAGE_CARD_CONTENT.map((data, index) => (
                        <ImageCard key={index} isHoverable={false} {...data} />
                    ))}
                </div>
            </div>
        </section>
    );
}
