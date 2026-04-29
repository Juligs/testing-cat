import Link from 'next/link';
import { TextLink, TitleTextSize, VerticalTitle } from 'react-ui-kit';
import type { BaseSectionProps } from '@repo/shared/interfaces';

interface TwinHeroProps extends BaseSectionProps {
    eyebrow: string;
    title: string;
    subtitle: string;
    languageLabel: string;
    regionLabel: string;
    languageLinks: { href: string; label: string; active: boolean }[];
    regionLinks: { href: string; label: string; active: boolean }[];
}

export function TwinHero({
    id,
    navbarColorScheme,
    eyebrow,
    title,
    subtitle,
    languageLabel,
    regionLabel,
    languageLinks,
    regionLinks,
}: TwinHeroProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-20 lg:py-30 flex flex-col gap-10">
                <VerticalTitle
                    overline={eyebrow}
                    title={title}
                    subtitle={subtitle}
                    size={TitleTextSize.Large}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" id="context">
                    <div className="rounded-3xl border border-transparency-black-8 bg-iota-neutral-0 p-8 flex flex-col gap-5">
                        <p className="text-label-md text-medium">{languageLabel}</p>
                        <div className="flex flex-wrap gap-4">
                            {languageLinks.map((link) => (
                                <Link key={link.href} href={link.href} aria-label={link.label}>
                                    <TextLink
                                        text={link.label}
                                        underline={!link.active}
                                        highlighted={link.active}
                                        showIcon={link.active}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-3xl border border-transparency-black-8 bg-iota-neutral-0 p-8 flex flex-col gap-5">
                        <p className="text-label-md text-medium">{regionLabel}</p>
                        <div className="flex flex-wrap gap-4">
                            {regionLinks.map((link) => (
                                <Link key={link.href} href={link.href} aria-label={link.label}>
                                    <TextLink
                                        text={link.label}
                                        underline={!link.active}
                                        highlighted={link.active}
                                        showIcon={link.active}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
