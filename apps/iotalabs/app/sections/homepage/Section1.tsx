import { BaseSectionProps } from '@repo/shared/interfaces';

const TEXT =
    'iotalabs is where the IOTA ecosystem meets strategic collaborations and growth opportunities come to life';

export function Section1({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-theme={theme}>
            <div className="container py-10 xs:py-16 lg:py-20 flex justify-center text-center">
                <p className="py-10 xs:py-16 lg:py-20 text-headline-sm text-darkest max-w-sm xs:max-w-3xl sm:max-w-lg lg:max-w-xl xl:max-w-[708px] font-semibold">
                    {TEXT}
                </p>
            </div>
        </section>
    );
}
