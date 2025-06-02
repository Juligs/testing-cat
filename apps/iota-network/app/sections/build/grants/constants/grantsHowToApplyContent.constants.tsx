import {
    ApplicationSubmission,
    CollectiveInvitation,
    EvaluationAndInterview,
    FundingDecision,
} from '@repo/icons';

export const HOW_TO_APPLY_CTA_CONTENT = {
    title: 'How to Apply',
    subtitle: "Applying for a grant is simple. Here's what to expect",
    image: '/build/grants/how_to_apply.png',
};

export const HOW_TO_APPLY_TEXT_LINKS_CTA = [
    {
        text: 'Apply now',
        link: 'https://airtable.com/appQqzg74YoTqK3Ht/pagOgN5kxDmUOrIW7/form',
    },
    {
        text: 'Learn more',
        link: 'https://iotalabs.io/grants',
    },
];

export const HOW_TO_APPLY_ICON_CONTENT = [
    {
        icon: <ApplicationSubmission />,
        title: 'Application Submission',
        body: 'Check that your project fits our guidelines and then apply by filling out the application form. Make sure to provide as much information as possible.',
    },
    {
        icon: <CollectiveInvitation />,
        title: 'Collective Invitation',
        body: "If your application aligns with our funding guidelines, you'll receive an invitation to your personal IOTA Builder's channel on Discord.",
    },
    {
        icon: <EvaluationAndInterview />,
        title: 'Evaluation and Interview',
        body: 'The interview is the chance to address any remaining questions. Afterwards, your application will be thoroughly assessed by our committee members.',
    },
    {
        icon: <FundingDecision />,
        title: 'Funding Decision',
        body: 'Once the committee reaches a decision, it will be communicated to you through your personal channel.',
    },
];
