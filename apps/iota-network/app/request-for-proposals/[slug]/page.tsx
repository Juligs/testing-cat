import { FetchProposalsPage } from '@repo/shared/sections';

export default async function ProposalPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    return <FetchProposalsPage rawSlug={params.slug} />;
}
