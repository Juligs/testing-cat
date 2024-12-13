'use client';

import { ArrowTopRight } from '@repo/icons';
import {
    Hero as HeroComponent,
    HeroBackgroundImage,
    VerticalTitle,
    TitleTextSize,
    Button,
    ButtonVariant,
    AnchorLink,
    Actions,
} from 'react-ui-kit';
import { scrollToSection } from '@shared/utils';
import Link from 'next/link';

interface HeroProps {
    id: string;
}
const HERO_INFO = {
    title: 'IOTA Grants',
    subtitle: 'Apply for a grant from iotalabs and turn your wildest dApp dreams into reality',
};

export function Hero({ id }: HeroProps) {
    return (
        <section className="w-full" id={id}>
            <div className="w-full h-screen flex flex-col justify-center items-center">
                <HeroComponent>
                    <HeroBackgroundImage
                        className="rounded-b-4xl sm:rounded-b-none"
                        src="/grants/hero-bg.svg"
                    />
                    <div className="w-full flex flex-col justify-between h-full px-4">
                        <div className="flex flex-col justify-center items-center flex-grow">
                            <VerticalTitle
                                isCentered
                                size={TitleTextSize.Large}
                                {...HERO_INFO}
                                inverted
                            >
                                <Actions>
                                    <Link
                                        href="https://airtable.com/appQqzg74YoTqK3Ht/pagSAWuqfqh3qIDg1/form"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button
                                            variant={ButtonVariant.Primary}
                                            text="Apply for a grant"
                                            icon={<ArrowTopRight />}
                                            inverted
                                        />
                                    </Link>
                                </Actions>
                            </VerticalTitle>
                        </div>
                    </div>
                    <div className="hidden sm:flex absolute container bottom-0 left-1/2 -translate-x-1/2 ">
                        <div className="flex gap-6 justify-center items-center w-full py-6">
                            <AnchorLink
                                onClick={() => scrollToSection('#hero-inverted')}
                                text="Supported Initiatives"
                                inverted
                            />
                            <AnchorLink
                                onClick={() => scrollToSection('#hero-inverted')}
                                text="Application Process"
                                inverted
                            />
                            <AnchorLink
                                onClick={() => scrollToSection('#hero-inverted')}
                                text="Funding Guidelines"
                                inverted
                            />
                        </div>
                    </div>
                </HeroComponent>
            </div>

            <div className="container flex flex-col sm:hidden gap-4 py-6 px-4 w-full">
                <AnchorLink
                    onClick={() => scrollToSection('#hero-inverted')}
                    text="Supported Initiatives"
                />
                <AnchorLink
                    onClick={() => scrollToSection('#hero-inverted')}
                    text="Application Process"
                />
                <AnchorLink
                    onClick={() => scrollToSection('#hero-inverted')}
                    text="Funding Guidelines"
                />
            </div>
        </section>
    );
}
