import { ArrowTopRight } from '@repo/icons';
import { Actions, Button, ButtonVariant, VerticalTitle } from 'react-ui-kit';
import { TwoColumnsImageTemplate } from '../../components';
import { BaseSectionProps } from '../../interfaces';
import { DECENTRALIZED_FINANCE_VERTICAL_TITLE_CONTENT } from './decentralizedFinanceContent.constants';

export function DecentralizedFinance({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full bg-labs-neutral-100" id={id} data-theme={theme}>
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/shared/focus-areas-sections/decentralized_finance.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...DECENTRALIZED_FINANCE_VERTICAL_TITLE_CONTENT}>
                            <Actions>
                                <a href="/learn/showcases">
                                    <Button
                                        variant={ButtonVariant.Primary}
                                        text="See showcase"
                                        icon={<ArrowTopRight />}
                                    />
                                </a>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
            </div>
        </section>
    );
}
