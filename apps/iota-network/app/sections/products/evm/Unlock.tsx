import { BaseSectionProps } from '@repo/shared/interfaces';
import {
    VerticalTitle,
    Actions,
    Button,
    ImageCard,
    TitleTextSize,
    IconContent,
} from 'react-ui-kit';
import { UNLOCK_VERTICAL_TITLE, UNLOCK_IMAGE_CARD_CONTENT, UNLOCK_ICON_CONTENT } from './constants';
import Link from 'next/link';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { ArrowTopRight } from '@repo/icons';

export function Unlock({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/products/evm/unlock/unlock.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...UNLOCK_VERTICAL_TITLE}>
                            <Actions>
                                <Link
                                    href="https://docs.iota.org/iota-evm/how-tos/core-contracts/introduction"
                                    target="_blank"
                                    rel="nopener noreferrer"
                                    aria-label="Go to the documentation"
                                >
                                    <Button text="View docs" icon={<ArrowTopRight />} />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
                <div className="grid grid-cols-1 xs:grid-cols-3 gap-6">
                    {UNLOCK_IMAGE_CARD_CONTENT.map((data, index) => (
                        <ImageCard {...data} key={index} isHoverable={false} />
                    ))}
                </div>
                <div className="flex flex-col gap-12">
                    <VerticalTitle title="Features" size={TitleTextSize.Small} />
                    <div className="grid grid-cols-1 xs:grid-cols-3 gap-6">
                        {UNLOCK_ICON_CONTENT.map((data, index) => (
                            <IconContent {...data} key={index} filled />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
