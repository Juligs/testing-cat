import Image from 'next/image';
import { VerticalTitle, VerticalTitleTextSize } from 'react-ui-kit';

interface BannerProps {
    title: string;
    subtitle?: string;
    body?: string;
    overline?: string;
    actions?: React.ReactNode;
}

export function Banner({ title, subtitle, body, overline, actions }: BannerProps) {
    return (
        <div className="bg-labs-neutral-10 h-full min-h-[375px] flex items-center justify-center rounded-4xl py-16 overflow-hidden relative">
            <div className="container md:max-w-3xl lg:max-w-4xl">
                <VerticalTitle
                    title={title}
                    subtitle={subtitle}
                    body={body}
                    overline={overline}
                    isCentered
                    size={VerticalTitleTextSize.Small}
                    inverted
                >
                    {actions}
                </VerticalTitle>
            </div>
            <Image
                src="/banner-pattern.svg"
                className="hidden md:flex absolute md:-top-20 md:-left-20 lg:top-0 lg:left-0"
                alt="bannner pattern"
                width={340}
                height={340}
            />
            <Image
                src="/banner-pattern.svg"
                className="hidden md:flex absolute md:-bottom-20 md:-right-20 lg:bottom-0 lg:right-0 rotate-180"
                alt="bannner pattern"
                width={340}
                height={340}
            />
        </div>
    );
}
