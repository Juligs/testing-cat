const TEXT =
    'IOTA Grants range from funding innovative IOTA projects and initiatives to research grants and scholarships at the cutting-edge of DLT research. Discover how you can use their programs to turn your ideas into reality.';

export function Section1({ id }: { id: string }) {
    return (
        <section className="w-full" id={id}>
            <div className="container py-10 xs:py-16 lg:py-20 flex justify-center text-center">
                <p className="text-title-md text-darkest max-w-sm xs:max-w-3xl sm:max-w-lg lg:max-w-xl xl:max-w-[708px]">
                    {TEXT}
                </p>
            </div>
        </section>
    );
}
