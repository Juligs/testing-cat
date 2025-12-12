import { BaseSectionProps } from '@repo/shared/interfaces';
import { HighlightCard, HorizontalTitle } from 'react-ui-kit';
import { MODULES_HORIZONTAL_TITLE, MODULES_HIGHLIGHT_CONTENT } from './constants';
import Link from 'next/link';

export function Modules({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <div className="w-full">
                    <HorizontalTitle {...MODULES_HORIZONTAL_TITLE} />
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6">
                    {MODULES_HIGHLIGHT_CONTENT.map((data, index) => (
                        <Link
                            href={data.link}
                            key={index}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="[&>div]:h-full"
                            aria-label={`Link to ${data.title}`}
                        >
                            <HighlightCard
                                key={index}
                                overline={data.overline}
                                title={data.title}
                                body={data.body}
                                backgroundImage={data.image}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
