import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, ButtonVariant, VerticalTitle } from 'react-ui-kit';
import { STREAMLINING_INNOVATION_VERTICAL_TITLE_CONTENT } from './constants';
import Link from 'next/link';
import { ArrowTopRight } from '@repo/icons';

export function StreamliningInnovation({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/learn/focus-areas/sections/trade_&_supply.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...STREAMLINING_INNOVATION_VERTICAL_TITLE_CONTENT}>
                            <Actions>
                                <Link
                                    href="https://iota-foundation.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit the IOTA Foundation website"
                                >
                                    <Button
                                        variant={ButtonVariant.Primary}
                                        text="IOTA Foundation"
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
