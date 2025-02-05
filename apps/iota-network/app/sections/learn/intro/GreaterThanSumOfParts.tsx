import { BaseSectionProps } from '@repo/shared/interfaces';
import { HorizontalTitle, ImageCard } from 'react-ui-kit';
import {
    GREAT_THAN_SUM_OF_PARTS_HORIZONTAL_TITLE,
    GREAT_THAN_SUM_OF_PARTS_IMAGE_CARD_CONTENT,
} from './constants';
import Link from 'next/link';

export function GreaterThanSumOfParts({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-theme={theme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-6 xs:gap-14 sm:gap-20">
                <div className="w-full">
                    <HorizontalTitle {...GREAT_THAN_SUM_OF_PARTS_HORIZONTAL_TITLE} />
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-6">
                    {GREAT_THAN_SUM_OF_PARTS_IMAGE_CARD_CONTENT.map((data, index) => (
                        <Link
                            href={data.link}
                            key={index}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="[&>div]:h-full"
                            aria-label={`Link to ${data.title}`}
                        >
                            <ImageCard
                                key={index}
                                title={data.title}
                                body={data.body}
                                image={data.image}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
