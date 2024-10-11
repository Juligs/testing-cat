import { Hero as HeroComponent, VerticalTitle, VerticalTitleTextSize } from 'react-ui-kit';

interface HeroProps {
    id: string;
}
const HERO_INFO = {
    title: 'Accelerate Growth',
    subtitle: 'Shaping value-driven IOTA ecosystems where innovation thrives',
};

export function Hero({ id }: HeroProps) {
    return (
        <section className="w-full h-full hero-height bg-labs-neutral-10" id={id}>
            <HeroComponent>
                {/* <HeroBackgroundVideo source="https://files.iota.org/media/binance_clubhouse_anaglyph.mp4" /> */}
                <div className="sm:max-w-3xl xl:max-w-5xl">
                    <VerticalTitle
                        inverted
                        isCentered
                        size={VerticalTitleTextSize.Large}
                        {...HERO_INFO}
                    />
                </div>
            </HeroComponent>
        </section>
    );
}
