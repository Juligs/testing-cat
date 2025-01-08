interface HiglitedHeroTextSectionProps {
    text: string;
}
export function HiglitedHeroTextSection({ text }: HiglitedHeroTextSectionProps): JSX.Element {
    return (
        <div className="container py-10 xs:py-16 lg:py-20 flex justify-center text-center">
            <p className="text-title-md text-darkest max-w-sm xs:max-w-3xl sm:max-w-lg lg:max-w-xl xl:max-w-[708px]">
                {text}
            </p>
        </div>
    );
}
