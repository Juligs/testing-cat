import Link from 'next/link';
import { Actions, ImageCard, TextLink, VerticalTitle } from 'react-ui-kit';

interface TrustFrameworkProps {
    verticalTitle: React.ComponentProps<typeof VerticalTitle>;
    textLink?: boolean;
    imageCards: (React.ComponentProps<typeof ImageCard> & {
        link: string;
    })[];
}

export function TrustFramework({ verticalTitle, textLink, imageCards }: TrustFrameworkProps) {
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
                    {imageCards.map(({ link, ...imageCardProps }, index) => (
                        <Link
                            key={index}
                            href={link}
                            className="[&>div]:h-full"
                            aria-label={`Link to ${imageCardProps.title}`}
                        >
                            <ImageCard {...imageCardProps} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
