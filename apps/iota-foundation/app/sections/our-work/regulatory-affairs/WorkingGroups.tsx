import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, HorizontalTitle, IconContent, TextLink } from 'react-ui-kit';
import { WORKING_GROUPS_HORIZONTAL_TITLE, WORKING_GROUPS_ICON_CONTENT } from './constants';
import Link from 'next/link';

export function WorkingGroups({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <div className="w-full break-words whitespace-normal">
                    <HorizontalTitle {...WORKING_GROUPS_HORIZONTAL_TITLE} />
                </div>
                <div className="grid grid-cols-1  sm:grid-cols-3 gap-6">
                    {WORKING_GROUPS_ICON_CONTENT.map((data, index) => (
                        <IconContent key={index} title={data.title} body={data.body} filled small>
                            <Actions>
                                <Link
                                    href={data.link}
                                    key={index}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="[&>div]:h-full"
                                    aria-label={`Link to ${data.title}`}
                                >
                                    <TextLink text="Learn More" showIcon />
                                </Link>
                            </Actions>
                        </IconContent>
                    ))}
                </div>
            </div>
        </section>
    );
}
