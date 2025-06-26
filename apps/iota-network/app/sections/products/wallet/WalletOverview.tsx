import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';

const WALLET_OVERVIEW =
    'IOTA wallets offer an intuitive way to manage digital assets - whether you need simplicity, advanced features, or seamless migration';

export function WalletOverview({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-iota-neutral-96"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-10 xs:py-16 lg:py-20 text-start">
                <TwoColumnsImageTemplate image="/products/wallet/overview.png">
                    <div className="sm:pr-[92px] lg:pr-[102px]">
                        <p className="text-title-md text-darkest font-semibold">
                            {WALLET_OVERVIEW}
                        </p>
                    </div>
                </TwoColumnsImageTemplate>
            </div>
        </section>
    );
}
