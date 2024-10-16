'use client';

import { CookieLibrary } from '@boxfish-studio/react-cookie-manager';
import './CookiePolicy.scss';
import { MdxPage } from 'app/(mdx-pages)/components';

export default function CookiePolicy() {
    const configuration = {};
    return (
        <MdxPage>
            <CookieLibrary configuration={configuration} />
        </MdxPage>
    );
}
