import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle, Actions, Button } from 'react-ui-kit';
import { SOLVING_FEE_VERTICAL_TITLE } from './constants';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import Link from 'next/link';

export function SolvingFee({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex">
                <TwoColumnsImageTemplate image="/products/gas-station/solving_fee.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...SOLVING_FEE_VERTICAL_TITLE}>
                            <Actions>
                                <Link
                                    href="https://docs.iota.org/operator/gas-station/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Learn more about IOTA Gas Station"
                                >
                                    <Button text="Learn more" icon />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
            </div>
        </section>
    );
}
