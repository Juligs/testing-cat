import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, VerticalTitle } from 'react-ui-kit';
import { EXPERIENCE_IOTA_TITLE_CONTENT } from './constants';
import Link from 'next/link';
import { ArrowTopRight } from '@repo/icons';

export function ExperienceIota({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/learn/trust-framework/experience_iota.png">
                    <div className="sm:pr-[92px] lg:pr-[102px]">
                        <VerticalTitle {...EXPERIENCE_IOTA_TITLE_CONTENT}>
                            <Actions>
                                <Link
                                    href="https://dpp.demo.iota.org/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    aria-Label="Try the Digital Product Passport demo"
                                >
                                    <Button text="Launch demo" icon={<ArrowTopRight />} />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
            </div>
        </section>
    );
}
