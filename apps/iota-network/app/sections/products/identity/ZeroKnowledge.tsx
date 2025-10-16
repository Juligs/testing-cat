import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle, Actions, Button, ImageCard } from 'react-ui-kit';
import {
    ZERO_KNOWLEDGE_VERTICAL_TITLE,
    ZERO_KNOWLEDGE_IMAGE_CARD,
    ZERO_KNOWLEDGE_TITLE,
    ZERO_KNOWLEDGE_BUTTONS,
} from './constants';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import Link from 'next/link';
import { ArrowTopRight } from '@repo/icons';

export function ZeroKnowledge({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-iota-neutral-98"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/products/identity/zero_knowledge/zero_knowledge.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...ZERO_KNOWLEDGE_VERTICAL_TITLE}>
                            <Actions>
                                {ZERO_KNOWLEDGE_BUTTONS.map(({ ...data }, index) => (
                                    <Link
                                        key={index}
                                        href={data.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="[&>div]:h-full"
                                        aria-label={`Link to ${data.ariaLabel}`}
                                    >
                                        <Button {...data} icon={<ArrowTopRight />} />
                                    </Link>
                                ))}
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
                <div className="flex flex-col gap-6 md:flex-row items-center">
                    <VerticalTitle {...ZERO_KNOWLEDGE_TITLE} />
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
                        {ZERO_KNOWLEDGE_IMAGE_CARD.map((data, index) => (
                            <Link
                                key={index}
                                href={data.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Link to ${data.title} documentation`}
                                className="[&>div]:h-full"
                            >
                                <ImageCard {...data} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
