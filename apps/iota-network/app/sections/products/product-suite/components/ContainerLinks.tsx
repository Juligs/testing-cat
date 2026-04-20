import { IotaToken } from '@repo/icons';
import clsx from 'clsx';
import Link from 'next/link';
import { TextLink } from 'react-ui-kit';
interface LinkItem {
    text: string;
    link: string;
    isExternal?: boolean;
}

interface Block {
    sectionLabel: string;
    sectionTitle: string;
    links: LinkItem[];
}

interface ContainerLinksProps {
    label: string;
    mainTitle: string;
    blocks: Block[];
    circleBlue?: boolean;
    mainLink?: string;
}

export function ContainerLinks({
    label,
    mainTitle,
    blocks,
    circleBlue,
    mainLink,
}: ContainerLinksProps) {
    return (
        <div className="flex flex-col sm:flex-row p-8 gap-8">
            <div className="flex flex-col xs:flex-row items-start gap-4 w-full sm:w-1/3 shrink-0">
                <div
                    className={clsx(
                        'rounded-full flex items-center justify-center',
                        circleBlue ? 'bg-network-primary-20' : 'bg-iota-neutral-6',
                    )}
                >
                    <div className="text-darkest-inverted [&_svg]:h-[70px] [&_svg]:w-[70px] p-3">
                        <IotaToken />
                    </div>
                </div>
                {mainLink ? (
                    <Link href={mainLink}>
                        <div className="flex flex-col gap-3">
                            <p className="text-light-inverted text-title-sm">{label}</p>
                            <p className="text-darkest-inverted text-title-lg">{mainTitle}</p>
                        </div>
                    </Link>
                ) : (
                    <div className="flex flex-col gap-3">
                        <p className="text-light-inverted text-title-sm">{label}</p>
                        <p className="text-darkest-inverted text-title-lg">{mainTitle}</p>
                    </div>
                )}
            </div>
            <div className="flex flex-col sm:flex-row gap-6 w-full">
                {blocks.map((block, index) => (
                    <div key={index} className="flex flex-col gap-2 sm:w-1/3">
                        <div>
                            <p className="text-light-inverted text-label-sm">
                                {block.sectionLabel}
                            </p>
                            <p className="text-darkest-inverted text-label-lg">
                                {block.sectionTitle}
                            </p>
                        </div>
                        <div className="flex flex-col gap-1 max-w-max">
                            {block.links.map((link, index) => (
                                <Link
                                    href={link.link}
                                    key={index}
                                    target={link?.isExternal ? '_blank' : undefined}
                                    rel={link?.isExternal ? 'noopener noreferrer' : undefined}
                                >
                                    <TextLink text={link.text} showIcon inverted />
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
