import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle, Actions, Button } from 'react-ui-kit';
import { BRIDGING_IOTA_VERTICAL_TITLE } from './constants';
import Link from 'next/link';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { ArrowTopRight } from '@repo/icons';

export function BridgingIota({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/products/evm/bridging.png" reverse>
                    <div className="sm:pl-[92px] lg:pl-[102px] text-center">
                        <VerticalTitle {...BRIDGING_IOTA_VERTICAL_TITLE}>
                            <Actions>
                                <Link
                                    href="https://stargate.finance/bridge"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Go to the page"
                                >
                                    <Button text="Bridge" icon={<ArrowTopRight />} />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
            </div>
        </section>
    );
}
