import { AnchorLink, TitleTextSize, VerticalTitle } from 'react-ui-kit';
interface VerticalTitleWithAnchorLinksProps {
    title?: string;
    subtitle?: string;
    content: React.ComponentProps<typeof AnchorLink>[];
}
export function VerticalTitleWithAnchorLinks({
    title,
    subtitle,
    content,
}: VerticalTitleWithAnchorLinksProps): JSX.Element {
    return (
        <div className="container py-14 xs:py-20 lg:py-30 flex flex-col md:flex-row justify-between text-center gap-14 xs:items-center w-full">
            <div className="md:w-1/2 xl:w-2/5 shrink-0">
                <VerticalTitle size={TitleTextSize.Medium} title={title} subtitle={subtitle} />
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.map((data, index) => (
                    <AnchorLink
                        key={index}
                        text={data.text}
                        onClick={data.onClick}
                        leadingIcon={data.leadingIcon}
                    />
                ))}
            </div>
        </div>
    );
}
