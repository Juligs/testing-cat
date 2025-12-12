import { VerticalTitle } from 'react-ui-kit';
import { IconContent } from '@components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { ShowcaseProject } from '@sections/learn/showcases/showcasesProjects.enums';
import { ExploreShowcases } from './ExploreShowcases';

interface FocusAreaSectionProps extends BaseSectionProps {
    image: string;
    verticalTitleContent: React.ComponentProps<typeof VerticalTitle>;
    iconContentColumns: React.ComponentProps<typeof IconContent>[][];
    showcases?: ShowcaseProject[];
}

export function FocusAreaSection({
    image,
    verticalTitleContent,
    iconContentColumns,
    showcases = [],
}: FocusAreaSectionProps) {
    return (
        <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-6 xs:gap-10 sm:gap-20">
            <TwoColumnsImageTemplate image={image} rounded>
                <div className="sm:pr-[92px]">
                    <VerticalTitle {...verticalTitleContent} />
                </div>
            </TwoColumnsImageTemplate>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {iconContentColumns.map((column, columnIndex) => (
                    <div key={columnIndex} className="pt-6 pr-6 pb-8 pl-4 gap-6 grid grid-rows-2">
                        {column.map((item, itemIndex) => (
                            <IconContent key={itemIndex} {...item} />
                        ))}
                    </div>
                ))}
            </div>

            <ExploreShowcases showcases={showcases} />
        </div>
    );
}
