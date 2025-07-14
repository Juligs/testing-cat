import { ArrowTopRight } from '@repo/icons';
import {
    LEARNING_RESOURCES_VERTICAL_TITLE_CONTENT,
    LEARNING_RESOURCES_IMAGE_CARD,
} from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import { Actions, Button, ImageCard, VerticalTitle } from 'react-ui-kit';

export function LearningResources({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30 items-center justify-center">
                <div className="max-w-[700px]">
                    <VerticalTitle {...LEARNING_RESOURCES_VERTICAL_TITLE_CONTENT}>
                        <Actions>
                            <Link
                                href="https://docs.iota.org/developer/iota-101/move-overview/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button text="See all" icon={<ArrowTopRight />} />
                            </Link>
                        </Actions>
                    </VerticalTitle>
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-6 max-w-[1000px]">
                    {LEARNING_RESOURCES_IMAGE_CARD.map((data, index) => (
                        <div key={index} className="[&>div]:h-full">
                            <Link
                                href={data.link}
                                target="_blank"
                                aria-label={`Link to ${data.title} documentation`}
                            >
                                <ImageCard
                                    title={data.title}
                                    animation={data.animation}
                                    subtitle={data.subtitle}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
