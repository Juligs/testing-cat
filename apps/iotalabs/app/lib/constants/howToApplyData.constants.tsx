import React from 'react';
import {
    ApplicationSubmission,
    CollectiveInvitation,
    EvaluationAndInterview,
    FundingDecision,
} from '@repo/icons';
export const HOW_TO_APPLY_DATA = [
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
        title: 'Evaluation & Interview',
        body: 'The interview is the chance to address any remaining questions. Afterwards, your application will be thoroughly assessed by our committee members.',
    },
    {
        icon: <FundingDecision />,
        title: 'Funding Decision',
        body: 'Once the committee reaches a decision, it will be communicated to you through your personal channel.',
    },
];
