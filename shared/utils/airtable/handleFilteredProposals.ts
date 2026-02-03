import { fetchFilteredProposals } from '../airtable/fetchProposalsData';

export async function handleFilteredProposals(request: Request) {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const slug = searchParams.get('slug');

    const filteredData = await fetchFilteredProposals();
    const keys = Object.keys(filteredData);

    if (type) {
        const key = keys.find((k) => k.toLowerCase() === type.toLowerCase());
        if (key) {
            return filteredData[key as keyof typeof filteredData];
        }
    }

    if (slug) {
        return filteredData.fullData.find((item) => item.slug === slug) || null;
    }

    return filteredData;
}
