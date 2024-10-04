import { Hero, HeroBackgroundImage } from 'react-ui-kit';
import { MdxPageTitle } from './MdxPageTitle';

export function MdxPageHero(): React.JSX.Element {
    return (
        <section id="hero-inverted" className="h-full">
            <Hero>
                <HeroBackgroundImage src="/hero-legal.png" />
                <div className="xl:w-3/4">
                    <MdxPageTitle />
                </div>
            </Hero>
        </section>
    );
}
