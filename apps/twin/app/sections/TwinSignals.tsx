import { HighlightCard, TitleTextSize, VerticalTitle } from 'react-ui-kit';
import type { BaseSectionProps } from '@repo/shared/interfaces';

interface TwinSignalsProps extends BaseSectionProps {
    overline: string;
    title: string;
    subtitle: string;
    cards: { title: string; body: string }[];
}

export function TwinSignals({
    id,
    navbarColorScheme,
    overline,
    title,
    subtitle,
    cards,
}: TwinSignalsProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-10">
                <VerticalTitle
                    overline={overline}
                    title={title}
                    subtitle={subtitle}
                    size={TitleTextSize.Small}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {cards.map((card) => (
                        <HighlightCard
                            key={card.title}
                            overline={overline}
                            title={card.title}
                            body={card.body}
                            hasGradientOverlay={false}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
