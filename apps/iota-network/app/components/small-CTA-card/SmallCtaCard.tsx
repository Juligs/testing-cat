import clsx from 'clsx';
import Image from 'next/image';

interface SmallCtaCardProps {
    title: string;
    subtitle: string;
    image: string;
}

export function SmallCtaCard({ title, subtitle, image }: SmallCtaCardProps): JSX.Element {
    return (
        <div
            className={clsx(
                'flex flex-col-reverse sm:flex-row w-full items-stretch overflow-hidden rounded-4xl border border-transparency-black-16',
            )}
        >
            <div
                className={clsx(
                    'flex flex-col gap-2 xs:gap-4 justify-center text-start pt-8 pl-8 pb-12 pr-4 sm:max-w-[250px] md:max-w-[306px]',
                )}
            >
                <p className="text-title-lg text-iota-neutral-10">{title}</p>
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
