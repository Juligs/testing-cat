import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import { Actions, Button, ButtonVariant, VerticalTitle } from 'react-ui-kit';
import { BETTER_DLT_VERTICAL_TITLE_CONTENT } from './constants';

export function BetterDLT({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/shared/team_contact_cta.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...BETTER_DLT_VERTICAL_TITLE_CONTENT}>
                            <Actions>
                                <Link
                                    href="https://docs.iota.org/about-iota/iota-architecture/consensus"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Link to learn more"
                                >
                                    <Button
                                        variant={ButtonVariant.Primary}
                                        text="Learn more"
                                        icon
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
