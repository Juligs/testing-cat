import { PageMetadataProps } from '@lib/utils';
import { SmallCtaCard } from '@components/small-CTA-card/SmallCtaCard';
import { Badge, IconContent, TextLink, VerticalTitle } from 'react-ui-kit';
import { ShowcaseCategory } from './showcasesProjects.enums';
export interface FrameShowcaseData {
    links: (React.ComponentProps<typeof TextLink> & {
        link?: string;
        isExternal?: boolean;
    })[];

    verticalTitle: Omit<React.ComponentProps<typeof VerticalTitle>, 'title'> & {
        title: string;
    };
    category: React.ComponentProps<typeof Badge>[];
    heroImage: string;
    description: React.ComponentProps<typeof VerticalTitle>;
    highlights: React.ComponentProps<typeof IconContent>[];
}

export interface ExploreMoreProps {
    ctaExploreCard: (React.ComponentProps<typeof SmallCtaCard> & {
        link: string;
        isExternal?: boolean;
    })[];
}

export interface ProjectLinksProps {
    website?: string;
    blog?: string;
    contact?: string;
    download?: string;
}

export interface TestimonialData {
    name: string;
    supportingText?: string;
    content: string;
    image?: string;
    inverted?: boolean;
}

export type ShowcaseCard = React.ComponentProps<typeof SmallCtaCard> & {
    category: string[];
};
export interface ShowcasePage {
    category?: ShowcaseCategory;
    card?: ShowcaseCard;
    metadata: PageMetadataProps;
    testimonial?: TestimonialData;
    projectLinks: ProjectLinksProps;
    exploreMore: ExploreMoreProps;
    frame: FrameShowcaseData;
}
