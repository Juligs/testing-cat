import { Hero, FirstSection, SecondSection, ThirdSection, FourthSection } from './sections';

export default function Home() {
    return (
        <>
            <Hero id="hero-inverted" />
            <FirstSection id="first-section" />
            <SecondSection id="second-section" />
            <ThirdSection id="third-section-inverted" />
            <FourthSection id="fourth-section" />
        </>
    );
}
