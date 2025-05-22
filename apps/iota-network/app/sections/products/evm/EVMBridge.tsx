import { Actions, CtaCard, TextLink } from 'react-ui-kit';
import Link from 'next/link';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { EVM_BRIDGE_CTA_CONTENT } from './constants';

export function EVMBridge({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex justify-center items-center w-full">
                <CtaCard {...EVM_BRIDGE_CTA_CONTENT}>
                    <Actions>
                        <Link
                            href="https://evm-bridge.iota.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Connect to the wallet"
                        >
                            <TextLink text="Connect" showIcon inverted />
                        </Link>
                    </Actions>
                </CtaCard>
            </div>
        </section>
    );
}
