import Link from 'next/link';
import { VerticalTitle, Actions, TextLink, ImageCard, TitleTextSize } from 'react-ui-kit';

interface IotaTechnologyStackProps {
    content: (React.ComponentProps<typeof ImageCard> & {
        link: string;
    })[];
}
export function IotaTechnologyStack({ content }: IotaTechnologyStackProps) {
    return (
        <section className="w-full bg-iota-neutral-98">
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-6 xs:gap-12">
                <VerticalTitle
                    title={'IOTA Technology Stack in Action'}
                    size={TitleTextSize.ExtraSmall}
                >
                    <Actions>
                        <Link href="/learn/showcases" aria-label="Go to the Showcases page">
                            <TextLink text="Learn more" showIcon />
                        </Link>
                    </Actions>
                </VerticalTitle>
                <div className="gap-6 grid grid-cols-1 xs:grid-cols-3">
                    {content.map((data, index) => (
                        <Link
                            key={index}
                            href={data.link}
                            className="[&>div]:h-full"
                            aria-label={`Go to ${data.title}`}
                        >
                            <ImageCard
                                title={data.title}
                                subtitle={data.subtitle}
                                image={data.image}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
