import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Button, ButtonRadius, ButtonVariant } from 'react-ui-kit';

interface ContactIcon {
    icon: React.ReactNode;
    url: string;
}

interface ContactUsWithIconsProps {
    overline?: string;
    title: string;
    subtitle?: string;
    image: string;
    icons?: ContactIcon[];
    hasContactButtons?: boolean;
    isCentered?: boolean;
    lightBackground?: boolean;
}

export function ContactUsWithIcons({
    title,
    overline,
    image,
    subtitle,
    icons,
    hasContactButtons = true,
    lightBackground,
    isCentered,
}: ContactUsWithIconsProps) {
    const backgroundColor = lightBackground ? 'bg-iota-neutral-96' : 'bg-iota-neutral-6';
    const layoutTextPosition = isCentered ? 'items-center' : 'items-center xs:items-start';
    const textPosition = isCentered
        ? 'text-center pt-8 xs:px-6 xs:pb-6 px-12 pb-12 w-full'
        : 'text-start max-w-[298px]';
    const layoutPosition = isCentered ? 'justify-center' : 'justify-between';

    return (
        <div
            className={clsx(
                'flex flex-col rounded-3xl',
                !isCentered && 'px-12 pt-12 pb-8',
                backgroundColor,
                layoutPosition,
            )}
        >
            <div
                className={clsx(
                    'flex flex-col xs:flex-row w-full overflow-hidden gap-4',
                    layoutTextPosition,
                )}
            >
                <div
                    className={clsx(
                        'text-darkest-inverted flex flex-col gap-2 justify-center ',
                        textPosition,
                    )}
                >
                    {overline && <p className="text-label-md ">{overline}</p>}
                    <p className={clsx('text-title-lg', lightBackground && 'text-darkest')}>
                        {title}
                    </p>
                    {subtitle && <p className="text-label-lg text-iota-neutral-30">{subtitle}</p>}
                </div>
                <Image
                    src={image}
                    alt={title}
                    width={298}
                    height={223.63}
                    className="w-[298px] h-full object-cover rounded-lg"
                />
            </div>
            {hasContactButtons && (
                <div className="flex flex-col xs:flex-row justify-between items-center">
                    <Link
                        href="mailto:partnerships@iota.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Contact us"
                    >
                        <Button
                            text="partnerships@iota.org"
                            icon
                            buttonBorderRadius={ButtonRadius.Rounded}
                        />
                    </Link>

                    {icons?.length ? (
                        <div className="flex flex-row items-center">
                            {icons.map(({ icon, url }, index) => (
                                <Link
                                    key={index}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Link to ${url}`}
                                >
                                    <Button
                                        variant={ButtonVariant.Ghost}
                                        inverted
                                        icon={icon}
                                        buttonBorderRadius={ButtonRadius.Rounded}
                                    />
                                </Link>
                            ))}
                        </div>
                    ) : null}
                </div>
            )}
        </div>
    );
}
