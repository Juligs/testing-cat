import { MdxPage } from '../components';
import { getPageMetadata } from '@lib/utils';
import Terms from '@repo/shared/components/(mdx-pages)/terms.mdx';
import { Metadata } from 'next';

const METADATA_TITLE = 'Events Terms & Conditions';

export const metadata: Metadata = getPageMetadata({
    title: METADATA_TITLE,
    path: '/event-terms',
});

export default function Page() {
    return (
        <MdxPage>
            <Terms />
        </MdxPage>
    );
}
