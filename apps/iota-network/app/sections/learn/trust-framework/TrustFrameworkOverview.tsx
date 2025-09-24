import { BaseSectionProps } from '@repo/shared/interfaces';

const TRUST_FRAMEWORK_OVERVIEW =
    'Bridging blockchain with real business needs, the IOTA Trust Framework offers ready-to-use building blocks – from identity and notarization to tokenization and gasless transactions.';

export function TrustFrameworkOverview({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-iota-neutral-96"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-10 xs:py-16 lg:py-20 flex justify-center text-center">
                <p className="text-title-md text-darkest max-w-sm xs:max-w-3xl sm:max-w-lg lg:max-w-xl xl:max-w-[708px]">
                    {TRUST_FRAMEWORK_OVERVIEW}
                </p>
            </div>
        </section>
    );
}
