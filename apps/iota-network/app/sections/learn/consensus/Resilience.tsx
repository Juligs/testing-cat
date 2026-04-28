import { RESILIENCE_VERTICAL_TITLE } from './constants';
import { Actions, Button, ButtonVariant, VerticalTitle } from 'react-ui-kit';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import Link from 'next/link';
import { ArrowTopRight } from '@repo/icons';

export function Resilience({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/learn/consensus/resilience.png">
                    <div className="sm:pr-[92px] lg:pr-[98px] max-w-[464px]">
                        <VerticalTitle {...RESILIENCE_VERTICAL_TITLE}>
                            <Actions>
                                <Link
                                    href="https://blog.iota.org/starfish-mainnet-release/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Read the blog post about Starfish Mainnet release"
                                >
                                    <Button
                                        text="Read the Blog"
                                        variant={ButtonVariant.Secondary}
                                        icon={<ArrowTopRight />}
                                    />
                                </Link>
                            </Actions>
                        </VerticalTitle>{' '}
                    </div>
                </TwoColumnsImageTemplate>
            </div>
        </section>
    );
}
