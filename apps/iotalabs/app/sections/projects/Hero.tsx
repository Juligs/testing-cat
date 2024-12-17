import { ArrowTopRight } from '@repo/icons';
import Link from 'next/link';
import {
    HeroBackgroundImage,
    Hero as HeroComponent,
    VerticalTitle,
    TitleTextSize,
    Actions,
    Button,
    ButtonVariant,
} from 'react-ui-kit';

interface HeroProps {
    id: string;
}
const HERO_INFO = {
    title: 'Building New Digital Economies, Together',
};

export function Hero({ id }: HeroProps) {
    return (
        <section className="w-full h-full hero-height bg-labs-neutral-10" id={id}>
            <HeroComponent>
                <HeroBackgroundImage src="/projects/hero.svg" />
                <div className="sm:max-w-3xl xl:max-w-5xl">
                    <VerticalTitle inverted isCentered size={TitleTextSize.Large} {...HERO_INFO}>
                        <Actions>
                            <Link href="/" target="_blank" rel="noopener noreferrer">
                                <Button
                                    text="Register your Project"
                                    variant={ButtonVariant.Primary}
                                    icon={<ArrowTopRight />}
                                />
                            </Link>
                        </Actions>
                    </VerticalTitle>
                </div>
            </HeroComponent>
        </section>
    );
}
