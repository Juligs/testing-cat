import { getPageMetadata } from '@lib/utils';
import { LighthouseProjects, Rwa } from '@repo/shared/sections';
import {
    Hero,
    IOTAAndMoveCTA,
    IntegrationStack,
    BuildingSolutions,
    EcosystemProjects,
    WhyBuild,
    BlogPosts,
    GettingStarted,
} from '@sections';
import type { Metadata } from 'next';

const METADATA_TITLE = 'We Bring the Real World to Web3';
const METADATA_DESCRIPTION =
    'IOTA builds public blockchain infrastructure to integrate Web3 with the real world.';

export const metadata: Metadata = getPageMetadata({
    title: METADATA_TITLE,
    description: METADATA_DESCRIPTION,
});

export default function Home() {
    return (
        <>
            <Hero id="hero" theme="inverted" />
            <IOTAAndMoveCTA id="iotamove-cta" theme="inverted" />
            <IntegrationStack id="integration-stack" />
            <BuildingSolutions id="building-solutions" />
            <Rwa id="rwa" />
            <LighthouseProjects id="lighthouse-projects" />
            <EcosystemProjects id="ecosystem-projects" />
            <WhyBuild id="why-build" theme="inverted" />
            <BlogPosts id="blog-posts" />
            <GettingStarted id="getting-started" />
        </>
    );
}
