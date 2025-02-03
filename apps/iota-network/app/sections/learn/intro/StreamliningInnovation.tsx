import { ArrowTopRight } from '@repo/icons';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import { Actions, Button, ButtonVariant, VerticalTitle } from 'react-ui-kit';
import { STREAMLINING_INNOVATION_VERTICAL_TITLE_CONTENT } from './constants';

export function StreamliningInnovation({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-theme={theme}>
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/shared/focus-areas-sections/trade_&_supply.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...STREAMLINING_INNOVATION_VERTICAL_TITLE_CONTENT}>
                            <Actions>
                                <Link href="">
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
