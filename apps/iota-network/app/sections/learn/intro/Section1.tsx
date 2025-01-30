import { BaseSectionProps } from '@repo/shared/interfaces';

const TEXT =
    'IOTA delivers permissionless public blockchain infrastructure to bring the benefits of Web3 to the real world.';

export function Section1({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-theme={theme}>
            <div className="container py-10 xs:py-16 lg:py-20 flex justify-center text-center">
                <p className="text-headline-sm text-darkest max-w-sm xs:max-w-3xl sm:max-w-lg lg:max-w-xl xl:max-w-[708px] font-semibold">
                    {TEXT}
                </p>
            </div>
        </section>
    );
}
