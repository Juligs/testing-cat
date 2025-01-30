import { Actions, ImageCard, TextLink, TitleTextSize, VerticalTitle } from 'react-ui-kit';
import {
    LIGHTHOUSE_IMAGE_CARD_CONTENT,
    LIGHTHOUSE_VERTICAL_TITLE_CONTENT,
} from './lighthouseContent.constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

interface LighthouseProjectsProps extends BaseSectionProps {
    showLink?: boolean;
}

export function LighthouseProjects({ id, theme, showLink = true }: LighthouseProjectsProps) {
    return (
        <section className="bg-white" id={id} data-theme={theme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-6 xs:gap-10 sm:gap-20">
                <VerticalTitle
                    title={LIGHTHOUSE_VERTICAL_TITLE_CONTENT.title}
                    size={TitleTextSize.Small}
                    isCentered
                >
                    {showLink && (
                        <a href="/learn/showcases/#lighthouse-projects">
                            <Actions>
                                <TextLink text="Learn more" showIcon />
                            </Actions>
                        </a>
                    )}
                </VerticalTitle>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-6">
                    {LIGHTHOUSE_IMAGE_CARD_CONTENT.map((data, index) => (
                        <a href={data.link} className="[&>div]:h-full">
                            <ImageCard
                                key={index}
                                title={data.title}
                                subtitle={data.subtitle}
                                image={data.image}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
