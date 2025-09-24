import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { IconContent, VerticalTitle } from 'react-ui-kit';
import { WHY_IOTA_ICON_CONTENT, WHY_IOTA_VERTICAL_TITLE_CONTENT } from './constants';

export function WhyIotaTrustFramework({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-iota-neutral-98"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/shared/data_visualization_dashboard.png">
                    <VerticalTitle {...WHY_IOTA_VERTICAL_TITLE_CONTENT} />
                </TwoColumnsImageTemplate>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-5 gap-6">
                    {WHY_IOTA_ICON_CONTENT.map((data, index) => (
                        <IconContent
                            key={index}
                            title={data.title}
                            body={data.body}
                            icon={data.icon}
                            filled
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
