import { HeroLayout, HeroBackground } from 'react-ui-kit';
import { MdxPageTitle } from '@repo/shared/components';

export function MdxPageHero(): React.JSX.Element {
    return (
        <section className="h-full" id="hero" data-theme="inverted">
            <HeroLayout>
                <HeroBackground src="/hero_legal.png" type="image" />
                <div className="xl:w-3/4">
                    <MdxPageTitle />
                </div>
            </HeroLayout>
        </section>
    );
}
