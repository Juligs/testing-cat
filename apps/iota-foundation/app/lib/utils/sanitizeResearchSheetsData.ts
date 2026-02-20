import { isValidUrl } from '@repo/shared/utils';

export interface PaperData {
    title: string;
    linkPeerReviewed?: string;
    linkOpenAccess?: string;
    authors?: string;
    publicationInfo?: string;
    abstract?: string;
    award?: string;
}
export function sanitizeResearchSheetsData(
    rows: (string | undefined)[][],
    sheet: string,
): PaperData[] {
    if (!Array.isArray(rows) || rows.length < 2) {
        console.log(`No data found or invalid format in sheet: ${sheet}`);
        return [];
    }

    return rows.slice(1).reduce<PaperData[]>((papers, row) => {
        const [title, linkPeerReviewed, linkOpenAccess, authors, publicationInfo, award, abstract] =
            row;

        if (!title || !authors) return papers;
        if (linkPeerReviewed && !isValidUrl(linkPeerReviewed)) return papers;
        if (linkOpenAccess && !isValidUrl(linkOpenAccess)) return papers;

        papers.push({
            title,
            linkPeerReviewed,
            linkOpenAccess,
            authors,
            publicationInfo,
            award,
            abstract,
        });

        return papers;
    }, []);
}
