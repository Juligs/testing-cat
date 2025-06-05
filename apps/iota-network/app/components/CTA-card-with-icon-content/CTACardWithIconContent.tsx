import Link from 'next/link';
import { TextLink, CtaCard, IconContent } from 'react-ui-kit';

interface CTACardWithIconContentProps {
    content: React.ComponentProps<typeof CtaCard> & {
        link: string;
    };
    iconContent: (React.ComponentProps<typeof IconContent> & {
        link: string;
    })[];
}
export function CTACardWithIconContent({ content, iconContent }: CTACardWithIconContentProps) {
    return (
        <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-6 xs:gap-12">
            <CtaCard {...content} brand aspectVideo>
                <Link href={content.link} aria-label="Go to the documentation">
                    <TextLink text={'Learn more'} showIcon />
                </Link>
            </CtaCard>
            <div className="flex flex-col xs:flex-row gap-6">
                {iconContent.map((data, index) => (
                    <IconContent
                        key={index}
                        title={data.title}
                        body={data.body}
                        icon={data.icon}
                        filled
                    >
                        <Link href={data.link}>
                            <TextLink text={'Learn more'} showIcon />
                        </Link>
                    </IconContent>
                ))}
            </div>
        </div>
    );
}
