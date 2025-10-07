import Link from 'next/link';
import { Actions, ImageCard, TextLink, VerticalTitle } from 'react-ui-kit';
import { TRUST_FRAMEWORK_IMAGE_CARD_CONTENT } from './trustFrameworkContent.constants';

interface TrustFrameworkProps {
    verticalTitle: React.ComponentProps<typeof VerticalTitle>;
    textLink?: boolean;
}
export type ImageCardWithLink = React.ComponentProps<typeof ImageCard> & { link: string };

export function TrustFramework({ verticalTitle, textLink }: TrustFrameworkProps) {
    return (
        <div className="flex justify-center items-center flex-col gap-14 w-full">
            <div className="w-full text-center max-w-[708px]">
                <VerticalTitle {...verticalTitle} isCentered>
                    {textLink && (
                        <Actions>
                            <Link href="/learn/trust-framework">
                                <TextLink text="Learn more" showIcon />
                            </Link>
                        </Actions>
                    )}
                </VerticalTitle>
            </div>
            <div className="flex flex-col gap-6 w-full h-full">
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-5 gap-6">
                    {TRUST_FRAMEWORK_IMAGE_CARD_CONTENT.map(
                        ({ link, ...imageCardProps }, index) => (
                            <Link
                                key={index}
                                href={link}
                                className="[&>div]:h-full"
                                aria-label={`Link to ${imageCardProps.title}`}
                            >
                                <ImageCard {...imageCardProps} />
                            </Link>
                        ),
                    )}
                </div>
            </div>
        </div>
    );
}
