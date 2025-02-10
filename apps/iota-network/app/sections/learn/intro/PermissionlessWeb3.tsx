import { BaseSectionProps } from '@repo/shared/interfaces';

const PERMISSIONLESS_WEB3_TEXT =
    'IOTA delivers permissionless public blockchain infrastructure to bring the benefits of Web3 to the real world.';

export function PermissionlessWeb3({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-10 xs:py-16 lg:py-20 flex justify-center text-center">
                <p className="text-headline-sm text-darkest max-w-sm xs:max-w-3xl sm:max-w-lg lg:max-w-xl xl:max-w-[708px] font-semibold">
                    {PERMISSIONLESS_WEB3_TEXT}
                </p>
            </div>
        </section>
    );
}
