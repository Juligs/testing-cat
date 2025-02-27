import { BuiltWithPartners, Daos, GranularDataProvenance } from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';

export const DLT_LEADER_VERTICAL_TITLE = {
    title: 'Leaders in DLT Research',
    body: 'We continue to make groundbreaking protocol research, like our DAG-based ledger, tokenomics, and consensus. Learn more about our work in and around DLT research.',
    image: './research/our-research/dlt_leader.png',
    size: TitleTextSize.Small,
};

export const DLT_LEADER_ICON_CONTENT = [
    {
        title: 'Academic publications',
        body: "We've published over 50 academic papers, two being awarded with best paper awards by the BLOCKCHAIN Congress.",
        icon: <GranularDataProvenance />,
        link: 'https://scholar.google.com/citations?hl=en&user=_ZIH81gAAAAJ&view_op=list_works&sortby=pubdate',
        isExternal: true,
    },
    {
        title: 'International IEEE workshop',
        body: 'IOTA Foundation is creator and co-host of Beyond the Chain, the International Workshop on DAG-based Distributed Ledger Technologies.',
        icon: <BuiltWithPartners />,
        link: 'https://icbc2024.ieee-icbc.org/workshop/dag-dlt',
        isExternal: true,
    },
    {
        title: 'Research collaborations',
        body: "We've established strong collaborations with leading European research institutes such as Imperial College London, University of Zurich, and University of Oslo.",
        icon: <Daos />,
        link: '/research/research-collaborations',
        isExternal: false,
    },
];
