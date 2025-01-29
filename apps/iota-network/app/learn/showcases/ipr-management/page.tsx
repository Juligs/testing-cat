import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import { IPRManagementHero } from '@sections';

import {
    IPRManagementPartners,
    IPRManagementTransparency,
    IPRManagementQuotes,
    IPRManagementContactUs,
    IPRManagementMoreToExplore,
} from '@repo/shared/sections';

const METADATA_TITLE = 'Intellectual Property Rights Management';
const METADATA_DESCRIPTION = 'Automated and transparent rights contracts and payments';

export const metadata: Metadata = getPageMetadata({
    title: METADATA_TITLE,
    description: METADATA_DESCRIPTION,
});

export default function Home() {
    return (
        <>
            <IPRManagementHero id="hero" />
            <IPRManagementPartners id="partners" />
            <IPRManagementTransparency id="transparency" />
            <IPRManagementQuotes id="quotes" />
            <IPRManagementContactUs id="contact-us" />
            <IPRManagementMoreToExplore id="explore" />
        </>
    );
}
