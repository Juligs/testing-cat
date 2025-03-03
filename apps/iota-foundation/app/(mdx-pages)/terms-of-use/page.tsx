import { MdxPage } from '../components';
import { getPageMetadata } from '@lib/utils';
import TermsOfUse from './terms.mdx';
import { Metadata } from 'next';

const METADATA_TITLE = 'Terms of Use';

export const metadata: Metadata = getPageMetadata({
    title: METADATA_TITLE,
    path: '/terms-of-use',
});

export default function Page() {
    return (
        <MdxPage>
            <TermsOfUse />
        </MdxPage>
    );
}
