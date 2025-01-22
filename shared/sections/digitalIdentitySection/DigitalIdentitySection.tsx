import { ArrowTopRight } from '@repo/icons';
import { Actions, Button, ButtonVariant, VerticalTitle } from 'react-ui-kit';
import { TwoColumnsImageTemplate } from '../../components';
import { BaseSectionProps } from '../../interfaces';
import { DIGITAL_IDENTITY_VERTICAL_TITLE_CONTENT } from './digitalIdentityContent.constants';

export function DigitalIdentitySection({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full bg-labs-neutral-100" id={id} data-theme={theme}>
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/shared/core-domains-sections/digital-identity.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...DIGITAL_IDENTITY_VERTICAL_TITLE_CONTENT}>
                            <Actions>
                                <a href="/learn/showcases/tokenized-kyc">
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
