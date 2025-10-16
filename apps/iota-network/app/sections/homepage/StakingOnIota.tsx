import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { STAKING_ON_IOTA_VERTICAL_TITLE, STAKING_ON_IOTA_BUTTONS } from './constants';
import { Actions, Button, VerticalTitle } from 'react-ui-kit';
import Link from 'next/link';
import { ArrowTopRight } from '@repo/icons';

export function StakingOnIota({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/homepage/staking_on_iota.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-balance">
                        <VerticalTitle {...STAKING_ON_IOTA_VERTICAL_TITLE}>
                            <Actions>
                                {STAKING_ON_IOTA_BUTTONS.map(({ isExternal, ...data }, index) => (
                                    <Link
                                        href={data.link}
                                        key={index}
                                        target={isExternal ? '_blank' : undefined}
                                        rel={isExternal ? 'noopener noreferrer' : undefined}
                                        className="[&>div]:h-full"
                                        aria-label={`Link to ${data.ariaLabel}`}
                                    >
                                        <Button {...data} icon={<ArrowTopRight />} />
                                    </Link>
                                ))}
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
            </div>
        </section>
    );
}
