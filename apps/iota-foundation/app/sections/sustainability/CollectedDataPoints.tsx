import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle, IconContent, Actions, TextLink } from 'react-ui-kit';
import { COLLECTED_DATA_VERTICAL_TITLE, COLLECTED_DATA_ICON_CONTENT } from './constants';
import Link from 'next/link';

export function CollectedDataPoints({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-12">
                <VerticalTitle {...COLLECTED_DATA_VERTICAL_TITLE} />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {COLLECTED_DATA_ICON_CONTENT.map((data, index) => (
                        <IconContent
                            key={index}
                            title={data.title}
                            body={data.body}
                            icon={data.icon}
                            filled
                        >
                            {data.link && (
                                <Actions>
                                    <Link
                                        href={data.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <TextLink text="Learn more" showIcon />
                                    </Link>
                                </Actions>
                            )}
                        </IconContent>
                    ))}
                </div>
            </div>
        </section>
    );
}
