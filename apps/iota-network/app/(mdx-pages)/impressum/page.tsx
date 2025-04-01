import { MdxPage } from '../components';
import { getPageMetadata } from '@lib/utils';
import Impressum from './impressum.mdx';
import { Metadata } from 'next';

const METADATA_TITLE = 'Impressum';

export const metadata: Metadata = getPageMetadata({
    title: METADATA_TITLE,
    path: '/impressum',
});

export default function Page() {
    return (
        <MdxPage>
            <Impressum />
        </MdxPage>
    );
}
