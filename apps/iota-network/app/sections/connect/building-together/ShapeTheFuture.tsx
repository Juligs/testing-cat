import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle, ImageCard, Actions, Button } from 'react-ui-kit';
import { SHAPE_THE_FUTURE_VERTICAL_TITLE, SHAPE_THE_FUTURE_IMAGE_CARD_CONTENT } from './constants';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import Link from 'next/link';
import { ArrowTopRight } from '@repo/icons';

export function ShapeTheFuture({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/shared/decentralized_grid.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...SHAPE_THE_FUTURE_VERTICAL_TITLE}>
                            <Actions>
                                <Link
                                    href="https://govern.iota.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Go to the IOTA governance forum"
                                >
                                    <Button text="Join the conversation" icon={<ArrowTopRight />} />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
                <div className="grid grid-cols-1 xs:grid-cols-3 gap-6">
                    {SHAPE_THE_FUTURE_IMAGE_CARD_CONTENT.map((data, index) => (
                        <ImageCard key={index} {...data} isHoverable={false} />
                    ))}
                </div>
            </div>
        </section>
    );
}
