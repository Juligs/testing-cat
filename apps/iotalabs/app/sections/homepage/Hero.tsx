import {
    Hero as HeroComponent,
    HeroBackground,
    VerticalTitle,
    VerticalTitleTextSize,
} from 'react-ui-kit';

const VERTICAL_TITLE_INFO = {
    overline: 'Digital Alchemy',
    title: 'Power Up Your Builder Journey with iotalabs',
    subtitle: 'Catalyzing Growth of Value-Driven IOTA Ecosystems',
};

export function Hero({ id }: { id: string }) {
    return (
        <section className="w-full h-full" id={id}>
            <HeroComponent>
                <HeroBackground source="https://files.iota.org/media/binance_clubhouse_anaglyph.mp4" />
                <div className="w-3/4">
                    <VerticalTitle
                        inverted
                        isCentered
                        size={VerticalTitleTextSize.Large}
                        title={VERTICAL_TITLE_INFO.title}
                        overline={VERTICAL_TITLE_INFO.overline}
                        subtitle={VERTICAL_TITLE_INFO.subtitle}
                    />
                </div>
            </HeroComponent>
        </section>
    );
}
