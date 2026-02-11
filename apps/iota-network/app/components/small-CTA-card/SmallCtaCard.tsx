import clsx from 'clsx';
import Image from 'next/image';

interface SmallCtaCardProps {
    title: string;
    subtitle: string;
    image: string;
    isFilled?: boolean;
    hasSmallTitle?: boolean;
}

export function SmallCtaCard({
    title,
    subtitle,
    image,
    isFilled,
    hasSmallTitle,
}: SmallCtaCardProps): JSX.Element {
    return (
        <div
            className={clsx(
                'flex flex-col-reverse sm:flex-row w-full sm:max-w-[708px] sm:h-[220px] overflow-hidden rounded-4xl',
                isFilled
                    ? 'border-none bg-iota-neutral-96'
                    : 'border border-transparency-black-16 bg-none',
            )}
        >
            <div
                className={clsx(
                    'flex flex-col justify-center text-start pt-8 pl-8 pb-12 pr-4 sm:w-1/2',
                    isFilled ? 'gap-0 xs:gap-0' : 'gap-2 xs:gap-4',
                )}
            >
                <p
                    className={clsx(
                        'text-iota-neutral-10',
                        hasSmallTitle ? 'text-title-md' : 'text-title-lg',
                    )}
                >
                    {title}
                </p>
                <p className="text-body-md text-iota-neutral-30">{subtitle}</p>
            </div>

            <div className="flex-1 aspect-video sm:flex-none sm:w-1/2 sm:h-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    width={354}
                    height={199}
                    sizes="(max-width: 640px) 100vw, 354px"
                    className="w-full h-full object-cover object-center rounded-4xl"
                />
            </div>
        </div>
    );
}
