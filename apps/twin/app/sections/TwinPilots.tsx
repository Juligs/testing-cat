import { TitleTextSize, VerticalTitle } from 'react-ui-kit';
import type { BaseSectionProps } from '@repo/shared/interfaces';

interface TwinPilotsProps extends BaseSectionProps {
    overline: string;
    title: string;
    subtitle: string;
    pilots: { title: string; description: string }[];
}

export function TwinPilots({
    id,
    navbarColorScheme,
    overline,
    title,
    subtitle,
    pilots,
}: TwinPilotsProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-10">
                <VerticalTitle
                    overline={overline}
                    title={title}
                    subtitle={subtitle}
                    size={TitleTextSize.Small}
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {pilots.map((pilot) => (
                        <div
                            key={pilot.title}
                            className="rounded-3xl border border-transparency-black-8 bg-white p-8 flex flex-col gap-4"
                        >
                            <h3 className="text-title-sm text-darkest">{pilot.title}</h3>
                            <p className="text-body-md text-medium">{pilot.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
