import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import { ImageCard, TextLink, VerticalTitle } from 'react-ui-kit';
import { WALLETS_IMAGE_CARD_CONTENT, WALLETS_LINKS, WALLETS_VERTICAL_TITLE } from './constants';

export function Wallets({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20">
                <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                    <VerticalTitle {...WALLETS_VERTICAL_TITLE}>
                        <div className="flex gap-6 flex-wrap">
                            {WALLETS_LINKS.map((data, index) => (
                                <Link
                                    key={index}
                                    href={data.link}
                                    target={data.isExternal ? '_blank' : undefined}
                                    rel={data.isExternal ? 'noopener noreferrer' : undefined}
                                >
                                    <TextLink text={data.title} showIcon />
                                </Link>
                            ))}
                        </div>
                    </VerticalTitle>
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-3 gap-6">
                    {WALLETS_IMAGE_CARD_CONTENT.map((data, index) => (
                        <ImageCard key={index} {...data} isHoverable={false} />
                    ))}
                </div>
            </div>
        </section>
    );
}
