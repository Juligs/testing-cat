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
        <div className="banner-bg h-full min-h-[375px] flex items-center justify-center rounded-4xl py-16 overflow-hidden">
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
        </div>
    );
}
