import type { Metadata } from 'next';
import {
    Hero,
    FirstSection,
    SecondSection,
    ThirdSection,
    FifthSection,
    FourthSection,
    NinthSection,
    LastSection,
} from '@sections';
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
            <FourthSection id="fourth-section" />
            <FifthSection id="fifth-section" />
            <NinthSection id="ninth-section" />
            <LastSection id="last-section" />
        </>
    );
}
