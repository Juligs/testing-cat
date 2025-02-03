'use client';

import { CONTACT_EMAIL, LEGAL_ROUTES, ROUTES, SOCIAL_LINKS } from '@lib/constants';
import { useScreenSize } from '@repo/shared/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { Button, ButtonSize, ButtonVariant, ScreenSize } from 'react-ui-kit';
import { Logo } from '../logo';

export function Footer() {
    const { size: screenSize } = useScreenSize();

    const COPYRIGHT_YEAR = new Date().getFullYear();
    const footerRoutes = ROUTES.filter((route) => !route.hideFromFooter);
    return (
        <footer className="bg-darkest text-white relative overflow-hidden">
            <Image
                src="/footer_pattern.svg"
                width={920}
                height={489}
                alt="footer-pattern"
                className="hidden xs:flex absolute top-0 -right-1/4 z-0"
            />
            <div className="container py-20 z-1 relative">
                <div className="grid grid-cols-1 xs:grid-cols-4 gap-8 xs:gap-0">
                    <div className="flex flex-col gap-y-4">
                        <span className="text-labs-neutral-100 text-label-lg">Pages</span>
                        <div className="flex flex-col gap-y-2">
                            {footerRoutes.map(({ path, title, isExternal }, index) => (
                                <Link
                                    key={index}
                                    href={path}
                                    className="text-labs-neutral-80 text-label-md max-w-max"
                                    target={isExternal ? '_blank' : undefined}
                                    rel={isExternal ? 'noopener noreferrer' : undefined}
                                >
                                    {title}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <span className="text-labs-neutral-100 text-label-lg">Legal</span>
                        <div className="flex flex-col gap-y-2">
                            {LEGAL_ROUTES.map(({ path, title }, index) => (
                                <Link
                                    key={index}
                                    href={path}
                                    className="text-labs-neutral-80 text-label-sm max-w-max"
                                >
                                    {title}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <span className="text-labs-neutral-100">iotalabs</span>
                        {/* <div className="flex flex-col text-body-sm">
                            <span className="text-labs-neutral-60">Rising Phoenix 2 Ltd</span>
                            <span className="text-labs-neutral-60">
                                Trinity Chambers, PO Box 4301 Road Town
                            </span>
                            <span className="text-labs-neutral-60">
                                Tortola, British Virgin Islands
                            </span>
                        </div> */}
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="text-labs-neutral-80 text-label-md max-w-max"
                        >
                            {CONTACT_EMAIL}
                        </a>
                    </div>
                </div>
                <hr className="my-6 text-transparency-white-16" />
                <div className="flex flex-col-reverse xs:flex-row w-full justify-between gap-y-8 xs:gap-y-0">
                    <div className="flex flex-row gap-x-4 items-center">
                        <Logo color="text-labs-neutral-100" />
                        <span className="text-labs-neutral-60 text-body-sm">
                            © {COPYRIGHT_YEAR} iotalabs
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {SOCIAL_LINKS.map(({ title, url, icon }, index) => {
                            const Icon = icon;
                            return (
                                <Link
                                    key={index}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button
                                        size={
                                            [ScreenSize.Xs, ScreenSize.Sm].includes(screenSize)
                                                ? ButtonSize.Small
                                                : ButtonSize.Medium
                                        }
                                        text={title}
                                        variant={ButtonVariant.Ghost}
                                        inverted
                                        icon={<Icon className="text-labs-neutral-100" />}
                                    />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}
