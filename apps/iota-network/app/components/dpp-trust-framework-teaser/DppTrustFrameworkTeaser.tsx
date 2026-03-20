import { Actions, ImageCard, TextLink, TitleTextSize, VerticalTitle } from 'react-ui-kit';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { DPP_TRUST_FRAMEWORK_IMAGE_CARD_CONTENT } from './dppTrustFrameworkContent.constants';
import Link from 'next/link';

interface DppTrustFrameworkTeaserProps {
    productName?: string;
    customTitle?: string;
}
type DppTrustFrameworkTeaser = BaseSectionProps & DppTrustFrameworkTeaserProps;

export function DppTrustFrameworkTeaser({
    id,
    navbarColorScheme,
    productName,
    customTitle,
}: DppTrustFrameworkTeaser) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30">
                <div className="flex flex-col gap-6 md:flex-row items-center sm:items-start md:items-center">
                    <div className="max-w-full xs:max-w-[464px]">
                        <VerticalTitle
                            title={
                                !customTitle
                                    ? `See how IOTA ${productName} works with the Trust Framework`
                                    : customTitle
                            }
                            size={TitleTextSize.ExtraSmall}
                        />
                    </div>

                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
                        {DPP_TRUST_FRAMEWORK_IMAGE_CARD_CONTENT.map((data, index) => (
                            <ImageCard key={index} {...data} isHoverable={false}>
                                <Actions>
                                    <Link
                                        href={data.link}
                                        target={data.isExternal ? '_blank' : undefined}
                                        rel={data.isExternal ? 'noopener noreferrer' : undefined}
                                    >
                                        <TextLink text={data.text} showIcon />
                                    </Link>
                                </Actions>
                            </ImageCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
