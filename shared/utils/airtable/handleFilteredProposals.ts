import { fetchFilteredProposals } from '../airtable/fetchProposalsData';
import { type NextRequest } from 'next/server';

export async function handleFilteredProposals(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;

    const type = searchParams.get('type') || undefined;
    const slug = searchParams.get('slug') || undefined;

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
