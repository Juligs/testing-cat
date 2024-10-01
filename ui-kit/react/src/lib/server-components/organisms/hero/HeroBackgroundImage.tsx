export function HeroBackgroundImage({ src, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <div className="absolute top-0 left-0 right-0 bottom-0 object-cover w-full h-full z-[-1]">
            <img
                src={src}
                className="max-h-full w-full h-full object-cover object-center"
                {...props}
            />
        </div>
    );
}
