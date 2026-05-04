import { BaseSectionProps } from '@repo/shared/interfaces';
import { DisplayStats } from 'react-ui-kit';
import { ScrollReveal } from '@repo/shared/components';
import { FOUNDATION_STATS } from './constants';

export function FoundationStats({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-labs-primary-100"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-16 md:py-20">
                <ScrollReveal
                    variant="reveal-stagger"
                    rootMargin="-10% 0px"
                    className="flex flex-col sm:flex-row justify-center items-center gap-6"
                >
                    {FOUNDATION_STATS.map((stats, i) => (
                        <div
                            key={stats.label}
                            style={{ '--i': i } as React.CSSProperties}
                            className="w-full"
                        >
                            <DisplayStats {...stats} />
                        </div>
                    ))}
                </ScrollReveal>
            </div>
        </section>
    );
}
