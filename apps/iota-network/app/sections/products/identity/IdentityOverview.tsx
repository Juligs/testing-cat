import { BaseSectionProps } from '@repo/shared/interfaces';

const IDENTITY_OVERVIEW =
    'IOTA redefines digital identity, combining privacy, security, and scalability. Built on W3C-compliant standards, it enhances trust and simplifies identity management for people, organizations and devices.';

export function IdentityOverview({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-iota-neutral-96"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-10 xs:py-16 lg:py-20 flex justify-center text-center">
                <p className="text-title-md text-darkest max-w-sm xs:max-w-3xl sm:max-w-lg lg:max-w-xl xl:max-w-[708px] font-semibold">
                    {IDENTITY_OVERVIEW}
                </p>
            </div>
        </section>
    );
}
