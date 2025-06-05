import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BuildingCTA } from '@components';
import { Actions, Button, ButtonVariant, VerticalTitle, TitleTextSize } from 'react-ui-kit';
import { ArrowTopRight } from '@repo/icons';
import Link from 'next/link';
import { BaseSectionProps } from '@repo/shared/interfaces';

const VERTICAL_TITLE_INFO = {
    title: 'Build with iotalabs',
    body: 'Connecting innovate Web3 minds and builders with a prime support network for building your decentralized innovations.',
};

export function BuildWith({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-labs-neutral-100"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col justify-center text-center gap-y-14 xs:gap-y-20 lg:gap-y-30">
                <TwoColumnsImageTemplate reverse image="/homepage/build_with.png">
                    <div className="sm:pl-[92px] lg:pl-[102px] xl:pl-[122px]">
                        <VerticalTitle
                            title={VERTICAL_TITLE_INFO.title}
                            size={TitleTextSize.Small}
                            body={VERTICAL_TITLE_INFO.body}
                        >
                            <Actions>
                                <Link href="/grants">
                                    <Button
                                        variant={ButtonVariant.Primary}
                                        text="Read more"
                                        icon={<ArrowTopRight />}
                                    />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
                <BuildingCTA />
            </div>
        </section>
    );
}
