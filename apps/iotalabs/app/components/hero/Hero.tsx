import {
    Hero as HeroComponent,
    HeroBackground,
    VerticalTitle,
    VerticalTitleTextSize,
} from 'react-ui-kit';

const OVERLINE = 'Digital Alchemy';
const TITLE = 'Power Up Your Builder Journey with iotalabs';
const SUBTITLE = 'Catalyzing Growth of Value-Driven IOTA Ecosystems';

export function Hero({ id }: { id: string }) {
    return (
        <section className="w-full h-screen" id={id}>
            <HeroComponent>
                <HeroBackground source="https://files.iota.org/media/binance_clubhouse_anaglyph.mp4" />
                <div className="w-3/4">
                    <VerticalTitle
                        inverted
                        isCentered
                        size={VerticalTitleTextSize.Large}
                        title={TITLE}
                        overline={OVERLINE}
                        subtitle={SUBTITLE}
                    />
                </div>
            </HeroComponent>
        </section>
    );
}
