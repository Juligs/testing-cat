import { FetchProposalsPage } from '@repo/shared/sections';

export default function ProposalPage({ params }: { params: { slug: string } }) {
    return <FetchProposalsPage rawSlug={params.slug} />;
}
