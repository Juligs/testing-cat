export type GridItem = {
    src: string;
    colSpan?: string;
};

export type GridRow = {
    items: GridItem[];
};

export const GRID_LAYOUTS: Record<string, GridRow[]> = {
    '2023': [
        {
            items: [
                {
                    src: '/beyond-the-chain/workshop/impressions/2023/1-1.png',
                    colSpan: 'col-span-2',
                },
                { src: '/beyond-the-chain/workshop/impressions/2023/1-2.png' },
                { src: '/beyond-the-chain/workshop/impressions/2023/1-3.png' },
            ],
        },
        {
            items: [
                { src: '/beyond-the-chain/workshop/impressions/2023/2-1.png' },
                { src: '/beyond-the-chain/workshop/impressions/2023/2-2.png' },
                {
                    src: '/beyond-the-chain/workshop/impressions/2023/2-3.png',
                    colSpan: 'col-span-2',
                },
            ],
        },
        {
            items: [
                { src: '/beyond-the-chain/workshop/impressions/2023/3-1.png' },
                { src: '/beyond-the-chain/workshop/impressions/2023/3-2.png' },
                {
                    src: '/beyond-the-chain/workshop/impressions/2023/3-3.png',
                },
                {
                    src: '/beyond-the-chain/workshop/impressions/2023/3-4.png',
                },
            ],
        },
        {
            items: [
                {
                    src: '/beyond-the-chain/workshop/impressions/2023/4-1.png',
                    colSpan: 'col-span-2',
                },
                { src: '/beyond-the-chain/workshop/impressions/2023/4-2.png' },
                {
                    src: '/beyond-the-chain/workshop/impressions/2023/4-3.png',
                },
            ],
        },
    ],
    '2024': [
        {
            items: [
                {
                    src: '/beyond-the-chain/workshop/impressions/2024/1-1.png',
                    colSpan: 'col-span-2',
                },
                { src: '/beyond-the-chain/workshop/impressions/2024/1-2.png' },
                { src: '/beyond-the-chain/workshop/impressions/2024/1-3.png' },
            ],
        },
        {
            items: [
                {
                    src: '/beyond-the-chain/workshop/impressions/2024/2-1.png',
                },
                { src: '/beyond-the-chain/workshop/impressions/2024/2-2.png' },
                {
                    src: '/beyond-the-chain/workshop/impressions/2024/2-3.png',
                    colSpan: 'col-span-2',
                },
            ],
        },
        {
            items: [
                {
                    src: '/beyond-the-chain/workshop/impressions/2024/3-1.png',
                    colSpan: 'col-span-2',
                },
                { src: '/beyond-the-chain/workshop/impressions/2024/3-2.png' },
                { src: '/beyond-the-chain/workshop/impressions/2024/3-3.png' },
            ],
        },
    ],
    '2025': [
        {
            items: [
                {
                    src: '/beyond-the-chain/workshop/impressions/2025/1-1.png',
                    colSpan: 'col-span-2',
                },
                { src: '/beyond-the-chain/workshop/impressions/2025/1-2.png' },
                { src: '/beyond-the-chain/workshop/impressions/2025/1-3.png' },
            ],
        },
        {
            items: [
                {
                    src: '/beyond-the-chain/workshop/impressions/2025/2-1.png',
                    colSpan: 'col-span-2',
                },
                {
                    src: '/beyond-the-chain/workshop/impressions/2025/2-2.png',
                    colSpan: 'col-span-2',
                },
            ],
        },
    ],
};
