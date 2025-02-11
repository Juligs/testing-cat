'use client';

import { COMPANY_DATA, LEGAL_ROUTES, ROUTES, SOCIAL_LINKS } from '@lib/constants';
import { Route } from '@lib/interfaces';
import { useScreenSize } from '@repo/shared/hooks';
import Link from 'next/link';
import { Button, ButtonSize, ButtonVariant, ScreenSize } from 'react-ui-kit';
import { Logo } from '../logo';
import { useState, useEffect } from 'react';

export function Footer() {
    const COPYRIGHT_YEAR = new Date().getFullYear();

    const { size: screenSize } = useScreenSize();
    const [clientScreenSize, setClientScreenSize] = useState<ScreenSize | null>(null);

    useEffect(() => {
        setClientScreenSize(screenSize);
    }, [screenSize]);

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
        <footer className="bg-darkest text-white relative overflow-hidden">
            <div className="container py-8 z-1 relative bg-network-neutral-10">
                <div className="grid grid-cols-2 gap-6 xs:grid-cols-3">
                    {footerRoutes.map((route, routeIndex) => (
                        <div key={routeIndex} className="flex flex-col gap-y-4">
                            <span className="text-labs-neutral-100 text-label-lg">
                                {route.title}
                            </span>

                            <div className="flex flex-col gap-y-2">
                                {route.children?.map(
                                    ({ path, title, isExternal }, subRouteIndex) => (
                                        <Link
                                            key={`${routeIndex}-${subRouteIndex}`}
                                            href={path}
                                            className="text-labs-neutral-80 text-label-md max-w-max"
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
                <hr className="my-6 text-transparency-white-16" />
                <div className="flex flex-col items-start md:items-end w-full justify-flex gap-6">
                    <div className="flex flex-col items-start md:flex-row w-full justify-between gap-y-8 md:gap-y-0">
                        <div className="flex flex-row gap-x-4 items-center">
                            <Logo color="text-labs-neutral-100" />
                            <span className="text-labs-neutral-60 text-body-sm">
                                © {COPYRIGHT_YEAR} IOTA Foundation
                            </span>
                        </div>
                        <div className="flex flex-wrap xs:flex-nowrap gap-4 xs:gap-6">
                            {LEGAL_ROUTES.map(({ path, title }, index) => (
                                <Link
                                    key={index}
                                    href={path}
                                    className="text-labs-neutral-80 text-label-sm w-full text-center whitespace-nowrap max-w-max"
                                    aria-label={`Link to ${title}`}
                                >
                                    {title}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {SOCIAL_LINKS.map(({ title, url, icon }, index) => {
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
                                            clientScreenSize &&
                                            [ScreenSize.Xs, ScreenSize.Sm].includes(
                                                clientScreenSize,
                                            )
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
            <div className="w-full bg-network-neutral-6 py-6 ">
                <div className="container grid grid-cols-1 gap-4 xs:grid-cols-3 xs:gap-6">
                    {COMPANY_DATA.map((contact, index) => (
                        <div key={index} className="flex flex-col text-network-neutral-60">
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
                </div>
            </div>
        </footer>
    );
}
