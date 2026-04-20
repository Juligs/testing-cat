import { IconContent, TitleTextSize, VerticalTitle } from 'react-ui-kit';
import { TwoColumnsImageTemplate } from '../two-columns-template';

interface VerticalTitleAndGridProps {
    verticalTitle: React.ComponentProps<typeof VerticalTitle>;
    iconContent: React.ComponentProps<typeof IconContent>[];
    image: string;
}

export function VerticalTitleAndGrid({
    verticalTitle,
    iconContent,
    image,
}: VerticalTitleAndGridProps) {
    return (
        <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
            <TwoColumnsImageTemplate image={image}>
                <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                    <VerticalTitle
                        title={verticalTitle.title}
                        size={TitleTextSize.Small}
                        subtitle={verticalTitle.subtitle}
                        body={
                            Array.isArray(verticalTitle.body)
                                ? verticalTitle.body.map((line, index) => <p key={index}>{line}</p>)
                                : verticalTitle.body
                        }
                    />
                </div>
            </TwoColumnsImageTemplate>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-6">
                {iconContent.map((data, index) => (
                    <IconContent key={index} title={data.title} body={data.body} icon={data.icon} />
                ))}
            </div>
        </div>
    );
}
