import type { Metadata } from 'next';
import { Hero, FirstSection, SecondSection, ThirdSection, LastSection } from '@sections';
import { getPageMetadata } from '@lib/utils';
import { HERO_PROPS } from '@sections/homepage/data';

const METADATA_DESCRIPTION = `${HERO_PROPS.title}. ${HERO_PROPS.subtitle}.`;

export const metadata: Metadata = getPageMetadata({
    title: 'Home',
    description: METADATA_DESCRIPTION,
});

export default function Home() {
    return (
        <>
            <Hero id="hero-inverted" />
            <FirstSection id="first-section" />
            <SecondSection id="second-section" />
            <ThirdSection id="third-section-inverted" />
            <LastSection id="last-section" />
        </>
    );
}
