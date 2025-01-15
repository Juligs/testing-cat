import Link from 'next/link';
import { Hero as HeroComponent } from '@repo/shared/components';
import { HERO_PROJECTS_BUTTON, HERO_PROJECTS_INFO, HERO_PROJECTS_BG } from '@lib/constants';
interface HeroProps {
    id: string;
}

export function Hero({ id }: HeroProps) {
    return (
        <section className="w-full h-full hero-height" id={id}>
            <HeroComponent
                verticalTitle={HERO_PROJECTS_INFO}
                background={HERO_PROJECTS_BG}
                buttons={HERO_PROJECTS_BUTTON}
                linkComponent={Link}
            />
        </section>
    );
}
