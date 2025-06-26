import {
    OTHER_WALLETS_VERTICAL_TITLE_CONTENT,
    OTHER_WALLETS_IMAGE_CARD_CONTENT,
    OTHER_WALLETS_MORE_TO_EXPLORE,
} from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import { ExploreCard, ImageCard, VerticalTitle } from 'react-ui-kit';

export function OtherWallets({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-6 xs:py-8 lg:py-12 flex flex-col gap-6 xs:gap-8 sm:gap-12 items-center justify-center">
                <div className="max-w-[700px]">
                    <VerticalTitle {...OTHER_WALLETS_VERTICAL_TITLE_CONTENT} />
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-6 w-full ">
                    <Link
                        href={OTHER_WALLETS_IMAGE_CARD_CONTENT.link}
                        target="_blank"
                        className="[&>div]:h-full"
                        rel="noopener noreferrer"
                    >
                        <ImageCard {...OTHER_WALLETS_IMAGE_CARD_CONTENT} noAspectRatio />
                    </Link>

                    <Link
                        href={OTHER_WALLETS_MORE_TO_EXPLORE.link}
                        target="_blank"
                        className="[&>div]:h-full"
                        rel="noopener noreferrer"
                    >
                        <ExploreCard {...OTHER_WALLETS_MORE_TO_EXPLORE} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
