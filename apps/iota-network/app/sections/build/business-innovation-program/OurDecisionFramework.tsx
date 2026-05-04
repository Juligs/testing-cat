import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle, Actions, Button, ImageCard } from 'react-ui-kit';
import { OUR_DECISION_VERTICAL_TITLE, OUR_DECISION_IMAGE_CARD_CONTENT } from './constants';
import Link from 'next/link';
import { TwoColumnsImageTemplate } from '@repo/shared/components';

export function OurDecisionFramework({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/build/business-innovation/our_decision.png">
                    <div className="sm:pr-[20px] text-center">
                        <VerticalTitle {...OUR_DECISION_VERTICAL_TITLE}>
                            <Actions>
                                <Link
                                    href="https://airtable.com/appoUvqpIo5bkDoSO/pag16jQChVVMh3zyh/form?ref=blog.iota.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Go to the form"
                                >
                                    <Button text="Apply now" icon />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
                <div className="grid grid-cols-1 xs:grid-cols-3 gap-6">
                    {OUR_DECISION_IMAGE_CARD_CONTENT.map((data, index) => (
                        <ImageCard key={index} isHoverable={false} {...data} />
                    ))}
                </div>
            </div>
        </section>
    );
}
