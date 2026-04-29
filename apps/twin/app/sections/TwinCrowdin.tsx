import { TitleTextSize, VerticalTitle } from 'react-ui-kit';
import type { BaseSectionProps } from '@repo/shared/interfaces';

interface TwinCrowdinProps extends BaseSectionProps {
    overline: string;
    title: string;
    subtitle: string;
    points: string[];
}

export function TwinCrowdin({
    id,
    navbarColorScheme,
    overline,
    title,
    subtitle,
    points,
}: TwinCrowdinProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-10">
                <VerticalTitle
                    overline={overline}
                    title={title}
                    subtitle={subtitle}
                    size={TitleTextSize.Small}
                />

                <div className="rounded-3xl border border-transparency-black-8 bg-white p-8 flex flex-col gap-5">
                    <ul className="list-disc pl-5 flex flex-col gap-3 text-body-md text-medium">
                        {points.map((point) => (
                            <li key={point}>{point}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
