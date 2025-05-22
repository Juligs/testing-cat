import { BaseSectionProps } from '@repo/shared/interfaces';

const TOKENIZATION_OVERVIEW =
    'IOTA brings real-world assets into the digital era by transforming ownership rights into secure, DLT-based tokens. From real estate and commodities to stocks and art, tokenization empowers a new era of digital asset management.';

export function TokenizationOverview({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-iota-neutral-96"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-10 xs:py-16 lg:py-20 flex justify-center text-center">
                <p className="text-title-md text-darkest max-w-sm xs:max-w-3xl sm:max-w-lg lg:max-w-xl xl:max-w-[708px] font-semibold">
                    {TOKENIZATION_OVERVIEW}
                </p>
            </div>
        </section>
    );
}
