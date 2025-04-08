import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { ENHANCED_DEV_EX_VERTICAL_TITLE_CONTENT } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, VerticalTitle } from 'react-ui-kit';
import Link from 'next/link';
import { ArrowTopRight } from '@repo/icons';

export function EnhancedDevEX({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/learn/move/enhanced_dev.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...ENHANCED_DEV_EX_VERTICAL_TITLE_CONTENT}>
                            <Actions>
                                <Link
                                    href="https://docs.iota.org/developer/iota-101/objects/object-model"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button text="Learn more" icon={<ArrowTopRight />} />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
            </div>
        </section>
    );
}
