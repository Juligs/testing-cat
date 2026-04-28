import { Actions, TextLink, VerticalTitle } from 'react-ui-kit';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { BACKED_VERTICAL_TITLE } from './constants';
import Link from 'next/link';

export function Backed({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container flex flex-col py-14 xs:py-20 lg:py-30 gap-14 xs:gap-20 lg:gap-30">
                <TwoColumnsImageTemplate image="/shared/data_visualization_dashboard.png">
                    <div className="sm:pr-[92px] lg:pr-[98px] text-center  w-full">
                        <VerticalTitle {...BACKED_VERTICAL_TITLE}>
                            <Actions>
                                <Link
                                    href="https://eprint.iacr.org/2025/567"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Read the whitepaper"
                                >
                                    <TextLink text="Read the whitepaper" showIcon />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
            </div>
        </section>
    );
}
