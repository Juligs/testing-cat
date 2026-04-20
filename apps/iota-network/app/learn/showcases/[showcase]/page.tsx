// Copyright (c) 2025 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

import { ExploreMoreShowcases } from '@sections';
import { ShowcasesFrame } from '@sections/learn/showcases/ShowcasesFrame';
import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import { BASE_URL, SHOWCASES_KEYWORDS } from '@lib/constants';
import { SHOWCASES } from '@sections/learn/showcases/constants/showcasesContent.constants';
import {
    CUSTOM_TITLE_DPP_TRUST_FRAMEWORK,
    DppTrustFrameworkTeaser,
} from '@components/dpp-trust-framework-teaser';
import { redirect } from 'next/navigation';

const getDefaultMetadata = (showcase?: string) =>
    getPageMetadata({
        title: 'IOTA Showcase',
        description: 'Explore real-world projects powered by IOTA technologies.',
        image: `${BASE_URL}/metadata/meta_image_home.png`,
        path: `/learn/showcases/${showcase}`,
        keywords: SHOWCASES_KEYWORDS,
    });

function isValidShowcase(showcase: string): showcase is keyof typeof SHOWCASES {
    return Object.hasOwn(SHOWCASES, showcase);
}

export async function generateMetadata(
    props: PageProps<'/learn/showcases/[showcase]'>,
): Promise<Metadata> {
    const params = await props.params;
    const showcase = params.showcase;

    if (!isValidShowcase(showcase)) {
        return getDefaultMetadata(showcase);
    }

    const page = SHOWCASES[showcase];
    const data = page?.metadata;
    if (!data) {
        return getDefaultMetadata(showcase);
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

export default async function ShowcasePage(props: PageProps<'/learn/showcases/[showcase]'>) {
    const params = await props.params;
    const { showcase } = params;

    if (!isValidShowcase(showcase)) {
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
