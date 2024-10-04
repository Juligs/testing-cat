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
            <div className="max-w-xs xs:max-w-3xl sm:max-w-lg lg:max-w-xl xl:max-w-xl">
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
                className="hidden xs:flex absolute xs:-top-20 xs:-left-20 lg:top-0 lg:left-0"
                alt="bannner pattern"
                width={340}
                height={340}
            />
            <Image
                src="/banner-pattern.svg"
                className="hidden xs:flex absolute xs:-bottom-20 xs:-right-20 lg:bottom-0 lg:right-0 rotate-180"
                alt="bannner pattern"
                width={340}
                height={340}
            />
        </div>
    );
}
