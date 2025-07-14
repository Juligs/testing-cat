import { SMART_CONTRACT_HORIZONTAL_TITLE, SMART_CONTRACT_IMAGE_CARD_CONTENT } from './constants';
import { Actions, Button, HorizontalTitle, ImageCard } from 'react-ui-kit';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import { ArrowTopRight } from '@repo/icons';

export function SmartContractRevolution({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <HorizontalTitle {...SMART_CONTRACT_HORIZONTAL_TITLE}>
                    <Actions>
                        <Link
                            href="https://docs.iota.org/developer/iota-101/move-overview/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Link to Move documentation"
                        >
                            <Button text="Learn more" icon={<ArrowTopRight />} />
                        </Link>
                    </Actions>
                </HorizontalTitle>

                <div className="gap-6 grid grid-cols-1 xs:grid-cols-3">
                    {SMART_CONTRACT_IMAGE_CARD_CONTENT.map((data, index) => (
                        <ImageCard
                            key={index}
                            title={data.title}
                            subtitle={data.subtitle}
                            image={data.image}
                            isHoverable={false}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
