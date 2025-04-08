import {
    ApplicationSubmission,
    EvaluationAndInterview,
    FundingDecision,
    Governance,
    GranularDataProvenance,
    PilotProjects,
} from '@repo/icons';

export const HOW_TO_APPLY_VERTICAL_TITLE_CONTENT = {
    title: 'How to Apply',
    body: "Our application process ensures alignment with both the strategic objectives of IOTA and your project's goals.",
    isCentered: true,
};

export const HOW_TO_APPLY_ICON_CONTENT = [
    {
        icon: <ApplicationSubmission />,
        title: 'Submit Your Proposal',
        body: "Use our Partnership Form to outline your objectives, alignment with IOTA, and how you'll leverage the L1 IOTA Mainnet with measurable on-chain metrics.",
    },
    {
        icon: <EvaluationAndInterview />,
        title: 'Initial Meeting',
        body: "If selected, an IOTA Partnerships Manager will schedule a call to discuss your project's scope, goals, and fit within the IOTA ecosystem.",
    },
    {
        icon: <PilotProjects />,
        title: 'Pitch Your Idea',
        body: 'Present a one-hour pitch covering your concept, roadmap, milestones, and how your solution solves a real-world challenge.',
    },
    {
        icon: <GranularDataProvenance />,
        title: 'Complete Due Diligence',
        body: 'Share details about your team, resources, and readiness to execute through our due diligence form.',
    },
    {
        icon: <Governance />,
        title: 'Proposal Assessment',
        body: 'We evaluate proposals against our Partner Decision Framework to ensure strategic alignment and feasibility.',
    },
    {
        icon: <FundingDecision />,
        title: 'Define Milestones & Build',
        body: "If approved, we'll define clear milestones, formalize agreements, and kickstart development on the IOTA Mainnet.",
    },
];
