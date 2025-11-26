// Copyright (c) 2025 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

import { ExploreMoreShowcases } from '@sections';
import { ShowcasesFrame } from '@sections/learn/showcases/ShowcasesFrame';
import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import { BASE_URL, SHOWCASES_KEYWORDS } from '@lib/constants';
import { ShowcaseProject } from '@sections/learn/showcases/showcasesProjects.enums';
import { SHOWCASES } from '@sections/learn/showcases/constants/showcasesContent.constants';
import {
    CUSTOM_TITLE_DPP_TRUST_FRAMEWORK,
    DppTrustFrameworkTeaser,
} from '@components/dpp-trust-framework-teaser';
import { redirect } from 'next/navigation';
interface Props {
    params: { showcase: ShowcaseProject };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const showcase = params.showcase;
    const page = SHOWCASES[showcase];
    const data = page?.metadata;

    if (!data) {
        return getPageMetadata({
            title: 'IOTA Showcase',
            description: 'Explore real-world projects powered by IOTA technologies.',
            image: `${BASE_URL}/metadata/meta_image_home.png`,
            path: `/learn/showcases/${showcase}`,
            keywords: SHOWCASES_KEYWORDS,
        });
    }

    return getPageMetadata({
        title: data.title,
        description: data.description,
        descriptionX: data.descriptionX,
        keywords: data.keywords,
        image: data.image,
        url: data.url,
        path: `/learn/showcases/${showcase}`,
    });
}

export default function ShowcasePage({ params }: Props) {
    const { showcase } = params;

    const page = SHOWCASES[showcase];

    if (!page) {
        return redirect('/learn/showcases');
    }

    return (
        <>
            <ShowcasesFrame showcase={showcase} />
            {showcase === 'dpp' && (
                <DppTrustFrameworkTeaser customTitle={CUSTOM_TITLE_DPP_TRUST_FRAMEWORK} />
            )}
            <ExploreMoreShowcases showcase={showcase} />
        </>
    );
}
