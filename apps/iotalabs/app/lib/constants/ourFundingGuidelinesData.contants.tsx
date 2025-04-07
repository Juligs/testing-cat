import React from 'react';
import {
    AssetCreation,
    AssetManagement,
    AssetTokenization,
    DecentralizedDataStorageAndSeamlessTransactions,
    DecentralizedFinance,
    EvaluationAndInterview,
} from '@repo/icons';
export const FUNDING_GUIDELINES_DATA = [
    {
        icon: <DecentralizedDataStorageAndSeamlessTransactions />,
        title: 'Relevance & Impact',
        body: 'Your project must push the IOTA network and its ecosystem forward. It has to solve a problem or fulfill a need with the potential to create serious impact.',
    },
    {
        icon: <AssetTokenization />,
        title: 'Capability & Fair Market Value',
        body: "You've got to have the chops to deliver successfully, and your requested budget should align with industry standards for similar tasks to make sure it's fair.",
    },
    {
        icon: <AssetManagement />,
        title: 'Risk Assessment',
        body: 'Keep the risks low - no flops, legal dramas, or bad PR. We want projects with low potential for poor outcomes, legal issues, and negative public perception.',
    },
    {
        icon: <DecentralizedFinance />,
        title: 'No Duplication of Funding',
        body: "No double-dipping. Your project shouldn't have funding for the same work from another source.",
    },
    {
        icon: <EvaluationAndInterview />,
        title: 'Conflict of Interest & Anti-Bribery',
        body: 'Be upfront about any conflicts of interest. Bribes or gifts? Hard pass. Any bribery or compensation attempts will get your application canned immediately.',
    },
    {
        icon: <AssetCreation />,
        title: 'Open Source',
        body: 'All code-based projects must be open source, using licenses like MIT, GNU, or Apache 2.0. Non-OSS projects should still keep it transparent by sharing results with the public.',
    },
];

export const APLICCATION_PROCESS_DATA = [
    {
        title: 'Expertise of Grantee',
        body: 'Are you legit and trustworthy? Do you have the necessary qualifications and reliability to execute the project effectively?',
    },
    {
        title: 'Usefulness',
        body: 'Will our ecosystem level up because of your project? Does the project offer substantial benefits to our builders, users, and partners?',
    },
    {
        title: 'Long-Term Viability',
        body: 'Got plans beyond the grant period? Is there a clear vision for the project to continue beyond the initial funding period?',
    },
    {
        title: 'Funding Guidelines',
        body: 'Does your project tick all our boxes? It is aligned with our funding guidelines and objectives?',
    },
    {
        title: 'Safety',
        body: 'How safe is your project from potential pitfalls? Is it at low-to-no risk of bad results, legal headaches, and PR disasters?',
    },
    {
        title: 'Scale',
        body: "Can your project grow big? What's the likelihood of this project scaling up effectively?",
    },
];
