import { BaseSectionProps } from '@repo/shared/interfaces';
import { JOIN_VERTICAL_TITLE_CONTENT } from './constants';
import { SOCIAL_LINKS } from '@repo/shared/constants';
import { AnchorLink, VerticalTitle } from 'react-ui-kit';
import Link from 'next/link';

export function Join({ id, navbarColorScheme }: BaseSectionProps) {
    const sectionLinks = SOCIAL_LINKS.filter((data) => data.visibility?.includes('section'));

    return (
        <section
            className="w-full bg-iota-neutral-98"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col md:flex-row justify-between text-center gap-14 xs:gap-20 lg:gap-30 xs:items-center w-full">
                <div className="md:w-1/2 xl:w-2/5 shrink-0">
                    <VerticalTitle {...JOIN_VERTICAL_TITLE_CONTENT} />
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                    {sectionLinks.map((data, index) => (
                        <Link key={index} href={data.url} target="_blank">
                            <AnchorLink
                                text={
                                    index < 2
                                        ? (data.labels?.section ?? data.title ?? '')
                                        : (data.title ?? '')
                                }
                                leadingIcon={<data.icon />}
                                darkest
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
