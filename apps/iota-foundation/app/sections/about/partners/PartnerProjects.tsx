import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, ButtonVariant, VerticalTitle } from 'react-ui-kit';
import Link from 'next/link';
import { PARTNER_PROJECTS_TITLE_CONTENT } from './constants';
import { ArrowTopRight } from '@repo/icons';

export function PartnerProjects({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/about/our-partners/partner_projects.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...PARTNER_PROJECTS_TITLE_CONTENT}>
                            <Actions>
                                <Link
                                    href="https://www.iota.org/learn/showcases"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="View IOTA's showcases"
                                >
                                    <Button
                                        variant={ButtonVariant.Primary}
                                        text="Showcases"
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
