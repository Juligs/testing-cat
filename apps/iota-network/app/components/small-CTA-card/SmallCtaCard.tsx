import clsx from 'clsx';
import Image from 'next/image';

interface SmallCtaCardProps {
    title: string;
    subtitle: string;
    image: string;
    isFilled?: boolean;
}

export function SmallCtaCard({ title, subtitle, image, isFilled }: SmallCtaCardProps): JSX.Element {
    return (
        <div
            className={clsx(
                'flex flex-col-reverse sm:flex-row w-full items-stretch overflow-hidden rounded-4xl ',
                isFilled
                    ? 'border-none bg-iota-neutral-96'
                    : 'border border-transparency-black-16 bg-none',
            )}
        >
            <div
                className={clsx(
                    'flex flex-col justify-center text-start pt-8 pl-8 pb-12 pr-4 sm:max-w-[250px] md:max-w-[306px]',
                    isFilled ? 'gap-0 xs:gap-0' : 'gap-2 xs:gap-4',
                )}
            >
                <p
                    className={clsx(
                        'text-iota-neutral-10',
                        isFilled ? 'text-title-md' : 'text-title-lg',
                    )}
                >
                    {title}
                </p>
                <p className="text-body-md text-iota-neutral-30">{subtitle}</p>
            </div>

            <div className="block flex-1">
                <Image
                    src={image}
                    alt={title}
                    width={354}
                    height={199.13}
                    className="max-w-none aspect-video object-cover object-center h-full w-full rounded-4xl"
                />
            </div>
        </div>
    );
}
