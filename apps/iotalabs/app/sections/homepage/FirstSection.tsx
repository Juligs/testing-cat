const TEXT =
    'iotalabs is where the IOTA ecosystem meets strategic collaborations and growth opportunities come to life';

export function FirstSection({ id }: { id: string }) {
    return (
        <section className="w-full" id={id}>
            <div className="container py-10 md:py-16 lg:py-20 flex justify-center text-center">
                <p className="py-10 md:py-16 lg:py-20 text-headline-sm text-darkest max-w-xl md:max-w-3xl font-semibold">
                    {TEXT}
                </p>
            </div>
        </section>
    );
}
