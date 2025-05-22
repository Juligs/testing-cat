import { BaseSectionProps } from '@repo/shared/interfaces';
import { ContainerLinks } from './components';
import { LAYER_1_LINKS, LAYER_2_LINKS } from './constants';
import { TextLinkWithIcon } from '@components';
import { TransferAndTradeBridgelessly } from '@repo/icons';
import Link from 'next/link';

export function ToolingCard({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30">
                <div className="bg-darkest p-6 rounded-4xl flex flex-col gap-6">
                    <ContainerLinks
                        mainTitle="IOTA Mainnet"
                        label="Layer 1"
                        blocks={LAYER_1_LINKS}
                        circleBlue
                        mainLink="/products/mainnet"
                    />
                    <div className="bg-transparency-white-4 flex justify-center items-center h-[84px] rounded-2xl">
                        <Link href="https://evm-bridge.iota.org/" target="_blank">
                            <TextLinkWithIcon
                                text="IOTA EVM Bridge"
                                icon={<TransferAndTradeBridgelessly />}
                                lineArrowSmall
                                inverted
                            />
                        </Link>
                    </div>
                    <ContainerLinks
                        mainTitle="IOTA EVM"
                        label="Layer 2"
                        blocks={LAYER_2_LINKS}
                        mainLink="/products/evm"
                    />
                </div>
            </div>
        </section>
    );
}
