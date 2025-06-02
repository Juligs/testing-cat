import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle, ImageCard, TextLink, Actions, ImageCardSize } from 'react-ui-kit';
import { CRYPTO_PLATFORMS_VERTICAL_TITLE, CRYPTO_PLATFORMS_IMAGE_CARD_CONTENT } from './constants';
import Link from 'next/link';

export function CryptoPlatforms({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-6 xs:gap-12">
                <VerticalTitle {...CRYPTO_PLATFORMS_VERTICAL_TITLE} />
                <div className="grid grid-cols-1 xs:grid-cols-3 gap-6">
                    {CRYPTO_PLATFORMS_IMAGE_CARD_CONTENT.map((data, index) => (
                        <ImageCard key={index} {...data} size={ImageCardSize.Small}>
                            <Actions>
                                <Link href={data.link} target="_blak">
                                    <TextLink text="Learn more" showIcon />
                                </Link>
                            </Actions>
                        </ImageCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
