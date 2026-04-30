import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle, Actions, Button } from 'react-ui-kit';
import { NFT_VERTICAL_TITLE } from './constants';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import Link from 'next/link';

export function NFTByDefault({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex">
                <TwoColumnsImageTemplate image="/shared/NFT.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...NFT_VERTICAL_TITLE}>
                            <Actions>
                                <Link
                                    href="https://docs.iota.org/developer/iota-101/nft/create-nft"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Learn how to create an NFT on IOTA"
                                >
                                    <Button text="Learn more" icon />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
            </div>
        </section>
    );
}
