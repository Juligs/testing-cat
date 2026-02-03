'use client';

import { BaseSectionProps } from '../../../interfaces';
import {
    checkInvalidImageUrlsAndRevalidate,
    revalidateProposalsAPI,
    RfPFields,
} from '../../../utils';

import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ProposalsPageSkeleton } from '../../skeletons';
import { FunctionalRequirementsIcon } from '../FunctionalRequirementsIcon';
import { NonFunctionalRequirements } from '../NonFunctionalRequirements';
import { OtherInformationContent } from '../OtherInformationContent';
import { RequestForProposalsTitle } from '../RequestForProposalsTitle';
import { StatsProposals } from '../StatsProposals';
import { TechnicalAndNonTechnicalRequirements } from '../TechnicalAndNonTechnicalRequirements';
import { getStatsFromProposal } from './getStatsFromProposal';

export function FetchProposalsPage({ rawSlug }: BaseSectionProps & { rawSlug: string }) {
    const [proposalData, setProposalData] = useState<RfPFields | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const fetchedData = await fetchProposalsData();
                const imageUrls = Array.isArray(fetchedData)
                    ? fetchedData
                          .map(({ image }: { image: string | null | undefined }) => image)
                          .filter((image): image is string => Boolean(image))
                    : [];

                const refreshedData = await checkInvalidImageUrlsAndRevalidate(
                    imageUrls,
                    fetchProposalsData,
                    revalidateProposalsAPI,
                );

                setProposalData(refreshedData ?? fetchedData);
            } catch (error) {
                console.error(
                    'Error fetching proposal data from Airtable (FetchProposalsPage):',
                    error,
                );
                setProposalData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [rawSlug]);

    const fetchProposalsData = async (): Promise<RfPFields> => {
        const slug = rawSlug.replace(/^proposal-/, '');
        const res = await fetch(`/api/proposals?ignore-cache=true&slug=${slug}`);
        if (!res.ok) {
            throw new Error(`Failed to fetch proposalData: ${res.status}`);
        }
        return await res.json();
    };

    if (loading) return <ProposalsPageSkeleton />;
    if (!proposalData) return notFound();

    const statsProposal = getStatsFromProposal(proposalData);
    const imageUrl =
        Array.isArray(proposalData.image) && proposalData.image.length > 0
            ? `${proposalData.image[0].url}`
            : '/homepage/placeholder_proposals.png';

    return (
        <div className="container py-20 xs:py-30 ">
            <div className="w-full max-w-[708px] mx-auto">
                <RequestForProposalsTitle
                    id="request-proposal-title"
                    image={imageUrl}
                    isOpen={proposalData.Status.toLowerCase() === 'accepted'}
                    content={{
                        title: proposalData['RfP Title'],
                        body: proposalData.Purpose,
                    }}
                />
                <StatsProposals id="stats-proposals" stats={statsProposal} />
                <FunctionalRequirementsIcon
                    id="functional-requirements-icon"
                    proposal={proposalData}
                />
                <TechnicalAndNonTechnicalRequirements
                    id="technical-and-non-technical-requirements"
                    proposal={proposalData}
                />
                <OtherInformationContent id="other-information" proposal={proposalData} />
                <NonFunctionalRequirements
                    id="non-functional-requirements"
                    proposal={proposalData}
                    isOpen={proposalData.Status.toLowerCase() === 'accepted'}
                />
            </div>
        </div>
    );
}
