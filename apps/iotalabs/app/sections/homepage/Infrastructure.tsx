import { VerticalTitle, TitleTextSize } from 'react-ui-kit';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { FetchInfraSliderData } from '@sections/subsections';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function Infrastructure({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-labs-neutral-100"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/homepage/infrastructure.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle
                            title="IOTA Infrastructure"
                            subtitle="Powering DeFi with trusted providers"
                            body="At IOTA, every tool and service provider plays a vital role in enabling a seamless experience for both builders and users. Our carefully selected third-party infrastructure providers act as the essential elements to enhance your IOTA experience."
                            size={TitleTextSize.Small}
                        />
                    </div>
                </TwoColumnsImageTemplate>
                <FetchInfraSliderData />
            </div>
        </section>
    );
}
