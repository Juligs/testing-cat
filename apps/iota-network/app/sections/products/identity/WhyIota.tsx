import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle, IconContent } from 'react-ui-kit';
import { WHY_IOTA_VERTICAL_TITLE, WHY_IOTA_ICON_CONTENT } from './constants';
import { TwoColumnsImageTemplate } from '@repo/shared/components';

export function WhyIota({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-iota-neutral-98"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/shared/NFT.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...WHY_IOTA_VERTICAL_TITLE} />
                    </div>
                </TwoColumnsImageTemplate>
                <div className="grid grid-cols-1 xs:grid-cols-3 gap-6">
                    {WHY_IOTA_ICON_CONTENT.map((data, index) => (
                        <IconContent key={index} {...data} filled />
                    ))}
                </div>
            </div>
        </section>
    );
}
