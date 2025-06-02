import { BaseSectionProps } from '@repo/shared/interfaces';

const GAS_STATION_OVERVIEW =
    'IOTA Gas Station enables gas-free transactions, simplifying Web3 interactions with easy sponsorship, access control, and deployment for businesses and developers.';

export function GasStationOverview({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-iota-neutral-96"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-10 xs:py-16 lg:py-20 flex justify-center text-center">
                <p className="text-title-md text-darkest max-w-sm xs:max-w-3xl sm:max-w-lg lg:max-w-xl xl:max-w-[708px] font-semibold">
                    {GAS_STATION_OVERVIEW}
                </p>
            </div>
        </section>
    );
}
