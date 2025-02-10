import Link from 'next/link';
import { CtaCard, TextLink } from 'react-ui-kit';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function EVMToolkit({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-labs-neutral-100"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container w-full py-14 xs:py-30">
                <CtaCard
                    title="EVM Toolkit"
                    subtitle="Get stared with IOTA EVM by sending and wrapping assets and making withdrawals on EVM Layer 2"
                    image="/homepage/section7.svg"
                    inverted
                >
                    <Link
                        href="https://evm-toolkit.evm.iotaledger.net"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <TextLink text="Connect" showIcon inverted />
                    </Link>
                </CtaCard>
            </div>
        </section>
    );
}
