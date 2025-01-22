import { ArrowTopRight } from '@repo/icons';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import { Actions, Button, ButtonVariant, VerticalTitle } from 'react-ui-kit';
import { VISION_VERTICAL_TITLE_CONTENT } from './constants';

export function Section8({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-theme={theme}>
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/learn/intro/section8/streamlining-innovation.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...VISION_VERTICAL_TITLE_CONTENT}>
                            <Actions>
                                <Link href="" target="_blank" rel="noopener noreferrer">
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
