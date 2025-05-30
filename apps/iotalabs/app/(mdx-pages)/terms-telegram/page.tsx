import { MdxPage } from '../components';
import { getPageMetadata } from '@lib/utils';
import TermsOfUseTelegram from './terms.mdx';
import { Metadata } from 'next';

const METADATA_TITLE = 'Telegram terms of use';

export const metadata: Metadata = getPageMetadata({
    title: METADATA_TITLE,
});

export default function Page() {
    return (
        <MdxPage>
            <TermsOfUseTelegram />
        </MdxPage>
    );
}
