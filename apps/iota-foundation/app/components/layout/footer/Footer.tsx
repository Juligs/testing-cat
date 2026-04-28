'use client';

import { COMPANY_DATA, LEGAL_ROUTES, ROUTES, SOCIAL_LINKS } from '@lib/constants';
import { LogoWithOutText } from '@repo/shared/components';
import { useScreenSize } from '@repo/shared/hooks';
import { Route } from '@repo/shared/interfaces';
import Link from 'next/link';
import { Button, ButtonSize, ButtonVariant, ScreenSize } from 'react-ui-kit';

export function Footer() {
    const COPYRIGHT_YEAR = new Date().getFullYear();

    const { size: screenSize } = useScreenSize();

    function getFooterRoutes(routes: Route[]): Route[] {
        return routes
            .filter((route) => !route.hideFromFooter)
            .map((route) => ({
                ...route,
                children: route.children?.length ? flattenChildren(route.children) : undefined,
            }));
    }

    function flattenChildren(routes: Route[]): Route[] {
        return routes.flatMap((route) => {
            if (route.hideFromFooter) return [];

            const currentRoute = { ...route, children: undefined };
            const nestedRoutes = route.children ? flattenChildren(route.children) : [];

            return [currentRoute, ...nestedRoutes];
        });
    }

    const footerRoutes = getFooterRoutes(ROUTES);

    return (
        <footer className="bg-iota-neutral-96 relative overflow-hidden">
            <div className="container py-8 z-1 relative">
                <div className="grid grid-cols-2 gap-6 xs:grid-cols-3 sm:grid-cols-6">
                    {footerRoutes.map((route, routeIndex) => (
                        <div key={routeIndex} className="flex flex-col gap-y-4">
                            <span className="text-darkest text-label-lg">{route.title}</span>
                            <div className="flex flex-col gap-y-2">
                                {route.children?.map(
                                    ({ path, title, isExternal }, subRouteIndex) => (
                                        <Link
                                            key={`${routeIndex}-${subRouteIndex}`}
                                            href={path}
                                            className="text-medium text-label-md max-w-max"
                                            target={isExternal ? '_blank' : undefined}
                                            rel={isExternal ? 'noopener noreferrer' : undefined}
                                            aria-label={`Link to ${title}`}
                                        >
                                            {title}
                                        </Link>
                                    ),
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <hr className="my-6 text-transparency-black-16" />
                <div className="flex flex-col items-start md:items-end w-full justify-flex gap-6">
                    <div className="flex flex-col items-start md:flex-row w-full justify-between gap-y-8 md:gap-y-0">
                        <div className="flex flex-row gap-x-4 items-center">
                            <LogoWithOutText color="text-iota-neutral-10" />
                            <span className="text-iota-neutral-50 text-body-sm">
                                © {COPYRIGHT_YEAR} IOTA Foundation. All rights reserved
                            </span>
                        </div>
                        <div className="grid grid-cols-2 xs:flex xs:flex-nowrap gap-4 xs:gap-6">
                            {LEGAL_ROUTES.map(({ path, title }, index) => (
                                <Link
                                    key={index}
                                    href={path}
                                    className="text-medium text-label-sm w-full text-center whitespace-nowrap max-w-max"
                                    aria-label={`Link to ${title}`}
                                >
                                    {title}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {SOCIAL_LINKS.map(({ url, icon, ariaLabel }, index) => {
                            const Icon = icon;
                            return (
                                <Link
                                    key={index}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="max-w-max"
                                    aria-label={`Link to ${url}`}
                                >
                                    <Button
                                        size={
                                            [ScreenSize.Xs, ScreenSize.Sm].includes(screenSize)
                                                ? ButtonSize.Small
                                                : ButtonSize.Medium
                                        }
                                        variant={ButtonVariant.Ghost}
                                        inverted
                                        icon={<Icon className="text-darkest" />}
                                        ariaLabel={ariaLabel}
                                    />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="w-full bg-iota-neutral-92 py-6 ">
                <div className="container grid grid-cols-1 gap-4 xs:grid-cols-3 xs:gap-6justify-between text-iota-neutral-50">
                    {COMPANY_DATA.map((contact, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="flex flex-col">
                                <p className="text-label-sm pb-2">{contact.title}</p>
                                {contact.address.map((line, lineIndex) => (
                                    <p className="text-body-sm" key={lineIndex}>
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="flex flex-col gap-2">
                        <p className="text-label-sm">Contact</p>
                        <Link href="mailto:contact@iota-foundation.org" aria-label="email IOTA">
                            <p className="text-body-sm">contact@iota-foundation.org</p>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
