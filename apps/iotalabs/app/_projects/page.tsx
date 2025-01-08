import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import {
    ProjectsPageHero,
    ProjectsPageSection1,
    ProjectsPageSection2,
    ProjectsPageSection3,
} from '@sections/projects';

const METADATA_TITLE = 'Projects';
const METADATA_DESCRIPTION = 'Building New Digital Economies, Together';

export const metadata: Metadata = getPageMetadata({
    title: METADATA_TITLE,
    description: METADATA_DESCRIPTION,
});

export default function Home() {
    return (
        <>
            <ProjectsPageHero id="hero-inverted" />
            <ProjectsPageSection1 id="section-1" />
            <ProjectsPageSection2 id="section-2" />
            <ProjectsPageSection3 id="section-3" />
        </>
    );
}
