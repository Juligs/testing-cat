import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle, Actions, Button } from 'react-ui-kit';
import { IOTA_TECHNICAL_VERTICAL_TITLE } from './constants';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { ArrowTopRight } from '@repo/icons';

export function IotaTechnical({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/learn/tokenomics/iota_technical.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...IOTA_TECHNICAL_VERTICAL_TITLE}>
                            <Actions>
                                <a
                                    href="/pdf/IOTA_Technical_and_Tokenomics_Whitepaper.pdf"
                                    aria-label="Download Whitepaper"
                                    download
                                >
                                    <Button text="Read the Paper" icon={<ArrowTopRight />} />
                                </a>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
            </div>
        </section>
    );
}
