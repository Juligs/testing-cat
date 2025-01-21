import { HeroLayout, HeroBackground } from 'react-ui-kit';
import { MdxPageTitle } from './MdxPageTitle';

export function MdxPageHero(): React.JSX.Element {
    return (
        <section className="h-full" id="hero" data-theme="inverted">
            <HeroLayout>
                <HeroBackground src="/hero-legal.png" type="image" />
                <div className="xl:w-3/4">
                    <MdxPageTitle />
                </div>
            </HeroLayout>
        </section>
    );
}
