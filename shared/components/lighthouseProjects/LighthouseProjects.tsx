import { Actions, ImageCard, TextLink, TitleTextSize, VerticalTitle } from 'react-ui-kit';
import {
    LIGHTHOUSE_IMAGE_CARD_CONTENT,
    LIGHTHOUSE_VERTICAL_TITLE_CONTENT,
} from './lighthouseContent.constants';
export function LighthouseProjects({ id }: { id: string }) {
    return (
        <section id={id} className="bg-white">
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-6 xs:gap-10 sm:gap-20">
                <VerticalTitle
                    title={LIGHTHOUSE_VERTICAL_TITLE_CONTENT.title}
                    size={TitleTextSize.Small}
                    isCentered
                >
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <Actions>
                            <TextLink text="Learn more" showIcon />
                        </Actions>
                    </a>
                </VerticalTitle>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-6">
                    {LIGHTHOUSE_IMAGE_CARD_CONTENT.map((data, index) => (
                        <ImageCard
                            key={index}
                            title={data.title}
                            subtitle={data.subtitle}
                            image={data.image}
                            isHoverable={false}
                        ></ImageCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
