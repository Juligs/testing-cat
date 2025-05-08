import { BaseSectionProps } from '@repo/shared/interfaces';

const EVM_OVERVIEW =
    'A fusion of the flexible and highly interoperable IOTA structure with an advanced EVM-compatible smart contract chain, ushering in a new era for seamlessly tokenizing real-world assets.';

export function EVMOverview({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-10 xs:py-16 lg:py-20 flex justify-center text-center">
                <p className="text-title-md text-darkest max-w-sm xs:max-w-3xl sm:max-w-lg lg:max-w-xl xl:max-w-[708px] font-semibold">
                    {EVM_OVERVIEW}
                </p>
            </div>
        </section>
    );
}
