import React from 'react';
import Image from 'next/image';
import { Logo } from '../logo';
import { CONTACT_EMAIL, LEGAL_ROUTES, ROUTES, SOCIAL_LINKS } from '@lib/constants';
import Link from 'next/link';

export function Footer() {
    const COPYRIGHT_YEAR = new Date().getFullYear();
    return (
        <footer className="bg-darkest text-white relative overflow-hidden">
            <Image
                src="/footer-pattern.svg"
                width={920}
                height={489}
                alt="footer-pattern"
                className="hidden md:flex absolute top-0 -right-1/4 z-0"
            />
            <div className="container py-20 z-1 relative">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
                    <div className="flex flex-col gap-y-4">
                        <span className="text-labs-neutral-100 text-label-lg">Pages</span>
                        <div className="flex flex-col gap-y-2">
                            {ROUTES.map(({ path, title }, index) => (
                                <Link
                                    key={index}
                                    href={path}
                                    className="text-labs-neutral-80 text-label-md"
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
                                    className="text-labs-neutral-80 text-label-sm"
                                >
                                    {title}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <span className="text-labs-neutral-100">iotalabs</span>
                        <div className="flex flex-col text-body-sm">
                            <span className="text-labs-neutral-60">
                                Office 611, 6th Floor, Al Khatem Tower
                            </span>
                            <span className="text-labs-neutral-60">
                                Abu Dhabi Global Market Square, Al Maryah Island
                            </span>
                            <span className="text-labs-neutral-60">
                                Abu Dhabi, United Arab Emirate
                            </span>
                        </div>
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="text-labs-neutral-80 text-label-md"
                        >
                            {CONTACT_EMAIL}
                        </a>
                    </div>
                </div>
                <hr className="my-6 text-transparency-white-16" />
                <div className="flex flex-col-reverse md:flex-row w-full justify-between gap-y-8 md:gap-y-0">
                    <div className="flex flex-row gap-x-4 items-center">
                        <Logo color="text-labs-neutral-100" />
                        <span className="text-labs-neutral-60 text-body-sm">
                            © {COPYRIGHT_YEAR} iotalabs
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-6">
                        {SOCIAL_LINKS.map(({ url, icon }, index) => {
                            const Icon = icon;
                            return (
                                <a
                                    key={index}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-labs-neutral-80 p-3"
                                >
                                    <Icon className="text-labs-neutral-100" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}
