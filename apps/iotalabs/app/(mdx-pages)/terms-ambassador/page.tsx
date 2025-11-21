import { MdxPage } from '../components';
import { getPageMetadata } from '@lib/utils';
import TermsOfUseAmbassador from './terms.mdx';
import { Metadata } from 'next';

const METADATA_TITLE = 'IOTA Ambassador Program terms of use ';

export const metadata: Metadata = getPageMetadata({
    title: METADATA_TITLE,
});

export default function Page() {
    return (
        <MdxPage>
            <TermsOfUseAmbassador />
        </MdxPage>
    );
}
