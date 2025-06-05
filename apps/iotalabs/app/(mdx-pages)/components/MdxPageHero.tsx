'use client';
import { HeroLayout, HeroBackground } from 'react-ui-kit';
import { MdxPageTitle } from '@repo/shared/components';
import { usePathname } from 'next/navigation';

const DEFAULT_BACKGROUND_IMAGE = '/hero_legal.png';

const backgroundImagePerRoute: Record<string, string> = {
    '/terms-telegram': '/hero_telegram.png',
};

export function MdxPageHero(): React.JSX.Element {
    const currentPath = usePathname();
    const bgImage = backgroundImagePerRoute[currentPath];
    return (
        <section className="h-full" id="hero" data-navbar-color-scheme="inverted">
            <HeroLayout>
                <HeroBackground src={bgImage ?? DEFAULT_BACKGROUND_IMAGE} mediaType="image" />
                <div className="xl:w-3/4">
                    <MdxPageTitle />
                </div>
            </HeroLayout>
        </section>
    );
}
