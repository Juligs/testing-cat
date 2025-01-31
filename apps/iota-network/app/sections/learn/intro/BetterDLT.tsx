import { ArrowTopRight } from '@repo/icons';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import { Actions, Button, ButtonVariant, VerticalTitle } from 'react-ui-kit';
import { BETTER_DLT_VERTICAL_TITLE_CONTENT } from './constants';

export function BetterDLT({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-theme={theme}>
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/shared/team-contact-cta/team-contact-cta.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...BETTER_DLT_VERTICAL_TITLE_CONTENT}>
                            <Actions>
                                <Link
                                    href="https://docs.iota.org/about-iota/iota-architecture/consensus"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button
                                        variant={ButtonVariant.Primary}
                                        text="Learn more"
                                        icon={<ArrowTopRight />}
                                    />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
            </div>
        </section>
    );
}
