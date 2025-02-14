import { getPageMetadata } from '@lib/utils';
import { Metadata } from 'next';
import { MdxPage } from '../components';
import PrivacyPolicy from './policy.mdx';

const METADATA_TITLE = 'Trademark';

export const metadata: Metadata = getPageMetadata({
    title: METADATA_TITLE,
    path: '/trademark',
});

export default function Page() {
    return (
        <MdxPage>
            <PrivacyPolicy />
        </MdxPage>
    );
}
