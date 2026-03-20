import { IconContent, TitleTextSize } from 'react-ui-kit';
import { BuiltWithPartners, DataInsights, IotaDnsResolver } from '@repo/icons';

export const PROJECT_FUNDING_VERTICAL_TITLE = {
    title: 'Fueling real-world adoption',
    subtitle: 'Seven projects funded. Real deployments delivered. Product insights captured.',
    body: 'The IOTA Business Innovation Program provided technical support and funding to accelerate production-grade solutions on IOTA. Beyond enabling these teams to ship, the program created short feedback loops that helped us strengthen our APIs, improve developer workflows, and identify what matters most for teams building in the field.',
    size: TitleTextSize.Medium,
};

export const PROJECT_FUNDING_STATS_CONTENT = [
    {
        label: 'Projects funded in 2025',
        value: '7 successfully supported projects',
        highlighted: true,
    },
    {
        label: 'Program concluded',
        value: 'No longer accepting applications',
    },
    {
        label: 'What’s next',
        value: 'Program insights are now shaping our products',
    },
];

export const PROJECT_OUTCOME_VERTICAL_TITLE = {
    title: 'Outcome of the Program',
    subtitle: 'This was just the beginning',
    body: 'The IOTA Business Innovation Program proved real-world demand for building on IOTA. While the program has concluded, its impact continues through live deployments, growing integrations, and product feedback that is shaping our roadmap, especially across APIs, developer experience, and faster iteration cycles.',
    size: TitleTextSize.Medium,
};

export const PROJECT_OUTCOME_ICON_CONTENT: React.ComponentProps<typeof IconContent>[] = [
    {
        icon: <BuiltWithPartners />,
        title: 'Business Innovation Program Partners',
        body: '7 teams validated real-world use cases and helped turn ideas into deployed solutions on IOTA.',
    },
    {
        icon: <IotaDnsResolver />,
        title: 'Real-World Challenges Addressed',
        body: 'Program teams tackled practical industry needs, from supply chain verification and digital identity to lifecycle and asset tracking.',
    },
    {
        icon: <DataInsights />,
        title: 'Trust Framework Product Insights',
        body: 'Program teams showed that Trust Framework products are reusable building blocks with strong usability and integration potential across industries.',
    },
];
