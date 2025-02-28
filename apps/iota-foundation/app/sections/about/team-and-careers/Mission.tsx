'use client';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, ButtonVariant, VerticalTitle } from 'react-ui-kit';
import { MISSION_TITLE_CONTENT } from './constants';
import Link from 'next/link';
import { ArrowTopRight } from '@repo/icons';

export function Mission({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-labs-neutral-100"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/about/team-and-careers/mission.png" reverse>
                    <div className="sm:pl-[92px] lg:pl-[102px] text-center">
                        <VerticalTitle {...MISSION_TITLE_CONTENT}>
                            <Actions>
                                <Link
                                    href="https://iota-foundation.jobs.personio.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Open positions"
                                >
                                    <Button
                                        variant={ButtonVariant.Primary}
                                        text="Open positions"
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
