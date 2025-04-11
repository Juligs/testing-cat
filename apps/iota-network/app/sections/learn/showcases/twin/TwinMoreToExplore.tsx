'use client';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { MoreToExplore } from '@repo/shared/components';
import { useNextShowcase } from '@lib/hooks';

export function TwinMoreToExplore({ id, navbarColorScheme }: BaseSectionProps) {
    const nextShowcase = useNextShowcase();
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <MoreToExplore content={nextShowcase} text="More to Explore" />
        </section>
    );
}
