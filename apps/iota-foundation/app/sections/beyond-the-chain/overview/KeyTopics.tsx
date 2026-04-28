import { BaseSectionProps } from '@repo/shared/interfaces';
import { KEY_TOPICS_ICON_CONTENT, KEY_TOPICS_VERTICAL_TITLE_CONTENT } from './constants';
import { IconContent, VerticalTitle } from 'react-ui-kit';

export function KeyTopics({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-6 justify-center items-center">
                <div className="max-w-[656px] text-center">
                    <VerticalTitle {...KEY_TOPICS_VERTICAL_TITLE_CONTENT} isCentered />
                </div>
                <div className="grid grid-cols-2 xs:grid-cols-4 gap-6">
                    {KEY_TOPICS_ICON_CONTENT.map((data, index) => (
                        <IconContent key={index} {...data} />
                    ))}
                </div>
            </div>
        </section>
    );
}
