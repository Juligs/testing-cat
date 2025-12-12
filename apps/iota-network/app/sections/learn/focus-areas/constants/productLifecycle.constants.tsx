import { Frame, IotaLogo } from '@repo/icons';

export const PRODUCT_LIFECYCLE_VERTICAL_TITLE_CONTENT = {
    title: 'Product Lifecycle',
    body: 'Products pass through many stages – from raw material sourcing to end-of-life recycling. But fragmented data and unverifiable claims make it difficult to ensure accountability. IOTA offers a unified view of a product’s entire lifecycle, helping prove sustainability, achieve compliance, and deliver circularity at every step.',
};

export const PRODUCT_LIFECYCLE_ICON_CONTENT = [
    [
        {
            icon: <Frame />,
            body: 'Lifecycle data siloed across stakeholders',
            transparent: true,
        },
        {
            icon: <IotaLogo />,
            body: 'Multiple stakeholders can update verified data',
            transparent: false,
        },
    ],
    [
        {
            icon: <Frame />,
            body: 'Increasingly complex regulatory compliance',
            transparent: true,
        },
        {
            icon: <IotaLogo />,
            body: 'Immutable, auditable lifecycle records that simplify compliance and reporting',
            transparent: false,
        },
    ],
    [
        {
            icon: <Frame />,
            body: 'Sustainability claims can’t be verified',
            transparent: true,
        },
        {
            icon: <IotaLogo />,
            body: 'Transparent recycling and sustainability data',
            transparent: false,
        },
    ],
];
