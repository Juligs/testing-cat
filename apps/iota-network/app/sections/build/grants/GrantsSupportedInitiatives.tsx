import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle, Actions, Button, ImageCard } from 'react-ui-kit';
import {
    SUPPORTED_INITIATIVES_VERTICAL_TITLE,
    SUPPORTED_INITIATIVES_IMAGE_CARD_CONTENT,
} from './constants';
import Link from 'next/link';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { ArrowTopRight } from '@repo/icons';

export function GrantsSupportedInitiatives({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/build/grants/supported-initiatives/supported_initiatives.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...SUPPORTED_INITIATIVES_VERTICAL_TITLE}>
                            <Actions>
                                <Link
                                    href={SUPPORTED_INITIATIVES_VERTICAL_TITLE.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Go to the Iota Grants page"
                                >
                                    <Button text="Learn more" icon={<ArrowTopRight />} />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
                <div className="gap-6 grid grid-cols-1 xs:grid-cols-3">
                    {SUPPORTED_INITIATIVES_IMAGE_CARD_CONTENT.map((data, index) => (
                        <ImageCard key={index} {...data} isHoverable={false} />
                    ))}
                </div>
            </div>
        </section>
    );
}
