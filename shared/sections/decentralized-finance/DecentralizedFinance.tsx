'use client';
import { ArrowTopRight } from '@repo/icons';
import { Actions, Button, ButtonVariant, VerticalTitle } from 'react-ui-kit';
import { TwoColumnsImageTemplate } from '../../components';
import { BaseSectionProps } from '../../interfaces';
import { DECENTRALIZED_FINANCE_VERTICAL_TITLE_CONTENT } from './decentralizedFinanceContent.constants';
import { getSharedSectionLink } from '../../utils';
import { useTheme } from 'react-ui-kit/client';

export function DecentralizedFinance({ id, navbarColorScheme }: BaseSectionProps) {
    const themeContext = useTheme();
    return (
        <section
            className="w-full bg-labs-neutral-100"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/learn/focus-areas/sections/decentralized_finance.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...DECENTRALIZED_FINANCE_VERTICAL_TITLE_CONTENT}>
                            <Actions>
                                <a
                                    href={getSharedSectionLink('/showcases', themeContext?.theme)}
                                    aria-label="See showcases"
                                >
                                    <Button
                                        variant={ButtonVariant.Primary}
                                        text="See showcases"
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
