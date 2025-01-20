import { Actions, TextLink, TitleTextSize, VerticalTitle } from 'react-ui-kit';
import { RWA_VERTICAL_TITLE_CONTENT } from './rwaContent.constants';
import { RwaCarousel } from './RwaCarousel';
export function RwaSection({ id }: { id: string }) {
    return (
        <section className="bg-white" id={id}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-6 xs:gap-10 sm:gap-20">
                <VerticalTitle
                    title={RWA_VERTICAL_TITLE_CONTENT.title}
                    size={TitleTextSize.Small}
                    isCentered
                >
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <Actions>
                            <TextLink text="See Showcases" showIcon />
                        </Actions>
                    </a>
                </VerticalTitle>
                <RwaCarousel />
            </div>
        </section>
    );
}
