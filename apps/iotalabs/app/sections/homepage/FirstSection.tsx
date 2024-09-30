const TEXT =
    'iotalabs is where the IOTA ecosystem meets strategic collaborations and growth opportunities come to life';

export function FirstSection({ id }: { id: string }) {
    return (
        <section className="w-full" id={id}>
            <div className="container py-20 md:py-32 lg:py-40 flex justify-center text-center">
                <p className="text-headline-sm text-darkest max-w-xl md:max-w-3xl font-semibold">
                    {TEXT}
                </p>
            </div>
        </section>
    );
}
