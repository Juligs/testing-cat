import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import {
    HeroMove,
    SmartContractRevolution,
    WhyMove,
    FlexibleAndComposable,
    EnhancedDevEX,
    KeyFeatures,
    LearningResources,
    MoveBlogPosts,
    MoveMoreToExplore,
} from '@sections';
import { ContactUs } from '@repo/shared/sections';
import {
    MOVE_METADATA_TITLE,
    MOVE_METADATA_DESCRIPTION_X,
    MOVE_KEYWORDS,
    MOVE_METADATA_DESCRIPTION,
    MOVE_IMAGE,
    MOVE_URL,
} from '@lib/constants';
export const metadata: Metadata = getPageMetadata({
    title: MOVE_METADATA_TITLE,
    description: MOVE_METADATA_DESCRIPTION,
    descriptionX: MOVE_METADATA_DESCRIPTION_X,
    keywords: MOVE_KEYWORDS,
    image: MOVE_IMAGE,
    url: MOVE_URL,
    path: '/learn/move',
});

export default function Home() {
    return (
        <>
            <HeroMove id="hero" navbarColorScheme="inverted" />
            <SmartContractRevolution id="smart-contract" />
            <WhyMove id="why-move" />
            <FlexibleAndComposable id="flexible-and-composable" />
            <EnhancedDevEX id="enhanced-dev-EX" />
            <KeyFeatures id="key-features" />
            <LearningResources id="learning-resources" />
            <MoveBlogPosts id="blog-posts" />
            <MoveMoreToExplore id="more-to-explore" />
            <ContactUs id="contact" />
        </>
    );
}
