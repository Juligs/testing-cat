import { MdxPage } from '../components';
import { getPageMetadata } from '@lib/utils';
import TermsOfUseWallet from './termsWallet.mdx';
import { Metadata } from 'next';

const METADATA_TITLE = 'Terms of Use Wallet';

export const metadata: Metadata = getPageMetadata({
    title: METADATA_TITLE,
});

export default function Page() {
    return (
        <MdxPage>
            <TermsOfUseWallet />
        </MdxPage>
    );
}
