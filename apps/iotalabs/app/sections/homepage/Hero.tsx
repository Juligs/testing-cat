import { HERO_PROPS } from '@sections/data';
import {
    Hero as HeroComponent,
    HeroBackground,
    VerticalTitle,
    VerticalTitleTextSize,
} from 'react-ui-kit';

interface HeroProps {
    id: string;
}

export function Hero({ id }: HeroProps) {
    return (
        <section className="w-full h-full hero-height" id={id}>
            <HeroComponent>
                <HeroBackground source="https://files.iota.org/media/binance_clubhouse_anaglyph.mp4" />
                <div className="xl:w-3/4">
                    <VerticalTitle
                        inverted
                        isCentered
                        size={VerticalTitleTextSize.Large}
                        {...HERO_PROPS}
                    />
                </div>
            </HeroComponent>
        </section>
    );
}
