import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { CtaCard, VerticalTitle } from 'react-ui-kit';
import { REAL_WORLD_CTA_CONTENT, REAL_WORLD_VERTICAL_TITLE_CONTENT } from './constants';

export function RealWorld({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/learn/trust-framework/real-world/real_world.png">
                    <div className="sm:pr-[92px] lg:pr-[102px]">
                        <VerticalTitle {...REAL_WORLD_VERTICAL_TITLE_CONTENT} />
                    </div>
                </TwoColumnsImageTemplate>
                <div className="grid grid-cols-1 xs:grid-cols-2  md:grid-cols-3 gap-6">
                    {REAL_WORLD_CTA_CONTENT.map((data, index) => (
                        <CtaCard key={index} {...data} small alignStart />
                    ))}
                </div>
            </div>
        </section>
    );
}
