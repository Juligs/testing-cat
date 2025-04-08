import { Actions, CtaCard, TextLink } from 'react-ui-kit';
import Link from 'next/link';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { START_STAKING_CTA_CONTENT, TEXT_LINK_CTA, START_STAKING_LIST } from './constants';

export function StartStaking({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex justify-center items-center w-full">
                <CtaCard {...START_STAKING_CTA_CONTENT} brand alignStart>
                    <div className="flex flex-col gap-16">
                        <Actions>
                            {TEXT_LINK_CTA.map((data, index) => (
                                <Link
                                    key={index}
                                    href={data.link}
                                    target="_blank"
                                    aria-label="go to the wallet"
                                    rel="noopener noreferrer"
                                >
                                    <TextLink {...data} showIcon />
                                </Link>
                            ))}
                        </Actions>
                        <div className="flex flex-col gap-2 items-start text-start justify-start">
                            {START_STAKING_LIST.map((data, index) => {
                                if (index === 0) {
                                    return (
                                        <p key={index} className="text-body-lg text-darkest">
                                            1. Download the IOTA {''}
                                            <span className="text-network-primary-40">
                                                Wallet Extension
                                            </span>
                                        </p>
                                    );
                                }

                                return (
                                    <p key={index} className="text-body-lg text-darkest">
                                        {data.text}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                </CtaCard>
            </div>
        </section>
    );
}
