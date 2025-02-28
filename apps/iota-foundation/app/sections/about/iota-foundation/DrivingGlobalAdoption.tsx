import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import { ImageCard, VerticalTitle } from 'react-ui-kit';
import {
    DRIVING_GLOBAL_ADOPTION_VERTICAL_TITLE,
    DRIVING_GLOBAL_ADOPTION_IMAGE_CARD_CONTENT,
} from './constants';

export function DrivingGlobalAdoption({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-color-gradient"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col sm:flex-row items-center xs:items-center gap-6">
                <div className="max-w-[464px]">
                    <VerticalTitle {...DRIVING_GLOBAL_ADOPTION_VERTICAL_TITLE} />
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
                    {DRIVING_GLOBAL_ADOPTION_IMAGE_CARD_CONTENT.map((data, index) => (
                        <Link
                            href={data.link}
                            key={index}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="[&>div]:h-full"
                            aria-label={`Link to ${data.title}`}
                        >
                            <ImageCard {...data} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
