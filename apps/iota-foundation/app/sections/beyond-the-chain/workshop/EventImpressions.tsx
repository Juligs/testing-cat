import { BaseSectionProps } from '@repo/shared/interfaces';
import { TitleTextSize, VerticalTitle } from 'react-ui-kit';
import Image from 'next/image';
import { GRID_LAYOUTS, GridRow } from './constants';

interface PaperYearProps extends BaseSectionProps {
    year: string;
}

export function EventImpressions({ id, navbarColorScheme, year }: PaperYearProps) {
    const rows: GridRow[] = GRID_LAYOUTS[year] ?? [];

    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <VerticalTitle title="Event Impressions" isCentered size={TitleTextSize.Small} />
                <div className="flex flex-col gap-2 xs:gap-6">
                    {rows.map((row, rowIdx) => (
                        <div
                            key={rowIdx}
                            className={`grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-4 gap-2 xs:gap-6`}
                        >
                            {row.items.map(({ src, colSpan }, index) => (
                                <div
                                    key={index}
                                    className={`relative overflow-hidden w-full ${colSpan ?? ''}`}
                                >
                                    <Image
                                        src={src}
                                        alt={`Workshop ${year}`}
                                        width={800}
                                        height={600}
                                        className="object-contain w-full h-auto"
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
