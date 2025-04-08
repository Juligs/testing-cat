import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle, Actions, Button, ImageCard } from 'react-ui-kit';
import {
    SAFETY_AND_EFFICIENCY_VERTICAL_TITLE,
    SAFETY_AND_EFFICIENCY_IMAGE_CARD_CONTENT,
    SAFETY_AND_EFFICIENCY_BUTTONS,
} from './constants';
import Link from 'next/link';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { ArrowTopRight } from '@repo/icons';

export function SafetyAndEfficiency({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/learn/consensus/safety-efficiency/safety_efficiency.png">
                    <div className="sm:pr-[20px] text-center">
                        <VerticalTitle {...SAFETY_AND_EFFICIENCY_VERTICAL_TITLE}>
                            <Actions>
                                {SAFETY_AND_EFFICIENCY_BUTTONS.map((data, index) => (
                                    <Link
                                        key={index}
                                        href={data.link}
                                        target="_blank"
                                        rel="nopener noreferrer"
                                        aria-label={data.ariaLabel}
                                    >
                                        <Button
                                            text={data.text}
                                            variant={data.variant}
                                            icon={<ArrowTopRight />}
                                        />
                                    </Link>
                                ))}
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6">
                    {SAFETY_AND_EFFICIENCY_IMAGE_CARD_CONTENT.map((data, index) => (
                        <ImageCard key={index} isHoverable={false} {...data} />
                    ))}
                </div>
            </div>
        </section>
    );
}
