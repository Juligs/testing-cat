import { ArrowTopRight } from '@repo/icons';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Button, ButtonVariant } from 'react-ui-kit';

interface ContactIcon {
    icon: React.ReactNode;
    url: string;
}

interface ContactUsWithIconsProps {
    overline: string;
    title: string;
    image: string;
    icons: ContactIcon[];
}

export function ContactUsWithIcons({ title, overline, image, icons }: ContactUsWithIconsProps) {
    return (
        <div
            className={clsx(
                'flex flex-col justify-between bg-iota-neutral-6 rounded-3xl px-12 pt-12 pb-8',
            )}
        >
            <div className="flex flex-col xs:flex-row w-full items-start overflow-hidden gap-4">
                <div className="text-darkest-inverted flex flex-col gap-2 justify-center text-start max-w-[298px]">
                    <p className="text-label-md ">{overline}</p>
                    <p className="text-title-lg">{title}</p>
                </div>
                <Image
                    src={image}
                    alt={title}
                    width={298}
                    height={223.63}
                    className="w-[298px] h-full object-cover rounded-lg"
                />
            </div>
            <div className="flex flex-col xs:flex-row justify-between items-center">
                <Link
                    href="mailto:partnerships@iota.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact us"
                >
                    <Button text="partnerships@iota.org" icon={<ArrowTopRight />} />
                </Link>

                <div className="flex flex-row items-center">
                    {icons.map(({ icon, url }, index) => (
                        <Link
                            key={index}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Link to ${url}`}
                        >
                            <Button variant={ButtonVariant.Ghost} inverted icon={icon} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
