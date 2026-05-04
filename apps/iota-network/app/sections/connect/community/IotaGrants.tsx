import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle, Actions, Button } from 'react-ui-kit';
import { IOTA_GRANTS_VERTICAL_TITLE } from './constants';
import Link from 'next/link';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { FetchGrantsStatsData } from '@repo/shared/sections';

export function IotaGrants({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-iota-neutral-4"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/connect/community/grants.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...IOTA_GRANTS_VERTICAL_TITLE}>
                            <Actions>
                                <Link
                                    href={IOTA_GRANTS_VERTICAL_TITLE.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Go to the Iota Grants page"
                                >
                                    <Button text="Learn more" icon inverted />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
                <FetchGrantsStatsData inverted />
            </div>
        </section>
    );
}
