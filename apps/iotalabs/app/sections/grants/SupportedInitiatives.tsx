import { VerticalTitle, TitleTextSize, ImageCard, ImageCardSize } from 'react-ui-kit';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { CARDS_DATA } from '@lib/constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function SupportedInitiatives({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full bg-labs-neutral-100" id={id} data-theme={theme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/grants/section3/section3.svg">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle
                            title="Supported Initiatives"
                            body="iotalabs Grants supports three key areas: open-source development, Web3 education, and community events like hackathons and workshops. Discover how you can receive support and bring your project to life."
                            size={TitleTextSize.Medium}
                        ></VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
                <div className="flex flex-col xs:flex-row xs:flex-wrap sm:flex-nowrap  gap-4 h-full justify-center xs:justify-start">
                    {CARDS_DATA.map((card, index) => (
                        <div key={index} className="flex w-full xs:w-[calc(50%-1rem)] sm:w-full">
                            <ImageCard
                                isHoverable={false}
                                size={ImageCardSize.Large}
                                image={card.image}
                                title={card.title}
                                subtitle={card.subtitle}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
