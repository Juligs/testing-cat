import { WALLETS_TOOLING_VERTICAL_TITLE, WALLETS_TOOLING_IMAGE_CARD_CONTENT } from './constants';
import { ImageCard, TitleTextSize, VerticalTitle } from 'react-ui-kit';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';

export function Wallets({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30 items-center">
                <VerticalTitle
                    title={WALLETS_TOOLING_VERTICAL_TITLE.title}
                    size={TitleTextSize.Small}
                    subtitle={
                        Array.isArray(WALLETS_TOOLING_VERTICAL_TITLE.subtitle)
                            ? WALLETS_TOOLING_VERTICAL_TITLE.subtitle.map((line, index) => (
                                  <p key={index}>{line}</p>
                              ))
                            : WALLETS_TOOLING_VERTICAL_TITLE.subtitle
                    }
                    isCentered
                />

                <div className="gap-6 grid grid-cols-1 xs:grid-cols-2 max-w-[1000px]">
                    {WALLETS_TOOLING_IMAGE_CARD_CONTENT.map((data, index) => (
                        <Link key={index} href={data.link}>
                            <ImageCard {...data} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
