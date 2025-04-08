import { KEY_FEATURES_VERTICAL_TITLE_CONTENT, KEY_FEATURES_ICON_CONTENT } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import { Actions, IconContent, TextLink, TitleTextSize, VerticalTitle } from 'react-ui-kit';

const titleContent = Array.isArray(KEY_FEATURES_VERTICAL_TITLE_CONTENT.title)
    ? KEY_FEATURES_VERTICAL_TITLE_CONTENT.title.map((line, index) => <p key={index}>{line}</p>)
    : KEY_FEATURES_VERTICAL_TITLE_CONTENT.title;

export function KeyFeatures({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30 items-center justify-center">
                <div className="max-w-[700px]">
                    <VerticalTitle
                        title={titleContent}
                        subtitle={KEY_FEATURES_VERTICAL_TITLE_CONTENT.subtitle}
                        isCentered
                        size={TitleTextSize.Small}
                    />
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-6">
                    {KEY_FEATURES_ICON_CONTENT.map((data, index) => (
                        <div key={index} className="[&>div]:h-full">
                            <IconContent
                                title={data.title}
                                body={data.body}
                                icon={data.icon}
                                filled
                            >
                                <Actions>
                                    <Link
                                        href={data.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Link to ${data.title} documentation`}
                                    >
                                        <TextLink text="Learn more" showIcon />
                                    </Link>
                                </Actions>
                            </IconContent>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
