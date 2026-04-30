import clsx from 'clsx';
import Image from 'next/image';

interface SmallCtaCardProps {
    overline?: string;
    title: string;
    subtitle: string;
    image: string;
    isFilled?: boolean;
    hasSmallTitle?: boolean;
    inverted?: boolean;
    imgSizes?: string;
    smallGap?: boolean;
    isHovered?: boolean;
}

export function SmallCtaCard({
    overline,
    title,
    subtitle,
    image,
    isFilled,
    hasSmallTitle,
    inverted,
    imgSizes,
    smallGap,
    isHovered = true,
}: SmallCtaCardProps): React.JSX.Element {
    const textColor = inverted ? 'text-iota-neutral-100' : 'text-iota-neutral-10';

    return (
        <div
            className={clsx(
                'flex flex-col-reverse sm:flex-row w-full sm:max-w-[708px] sm:h-[220px] overflow-hidden rounded-4xl group hover:cursor-pointer',
                isHovered &&
                    'hover:shadow-lg transition-[transform,box-shadow] hover:-translate-y-1 duration-300 ease-in',
                inverted && 'bg-iota-neutral-6',
                isFilled
                    ? 'border-none bg-iota-neutral-96'
                    : 'border border-transparency-black-16 bg-none',
            )}
        >
            <div
                className={clsx(
                    'flex flex-col justify-center text-start pt-8 pl-8 pb-12 pr-4 sm:w-1/2',
                    isFilled ? 'gap-0 xs:gap-0' : smallGap ? 'gap-1' : 'gap-2 xs:gap-4',
                )}
            >
                {overline && (
                    <p className={clsx('text-iota-neutral-60 text-label-sm ')}>{overline}</p>
                )}
                <p
                    className={clsx(
                        textColor,
                        hasSmallTitle ? 'text-title-md' : 'text-title-lg',
                        isHovered ? 'group-hover:text-network-primary-40' : '',
                    )}
                >
                    {title}
                </p>
                <p
                    className={clsx(
                        'text-body-md ',
                        inverted ? 'text-medium-inverted' : 'text-iota-neutral-30',
                    )}
                >
                    {subtitle}
                </p>
            </div>

            <div className="flex-1 aspect-video sm:flex-none sm:w-1/2 sm:h-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    width={354}
                    height={199}
                    sizes={imgSizes || '(max-width: 640px) 798px, 354px'}
                    className="w-full h-full object-cover object-center rounded-4xl"
                />
            </div>
        </div>
    );
}
