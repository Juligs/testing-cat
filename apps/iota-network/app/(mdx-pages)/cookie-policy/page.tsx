'use client';

import { CookieLibrary } from '@boxfish-studio/react-cookie-manager';
import './CookiePolicy.scss';
import { MdxPage } from '../components';

export default function CookiePolicy() {
    const configuration = {};
    return (
        <MdxPage>
            <h1 className="text-headline-md text-darkest">Cookie Policy</h1>
            <CookieLibrary configuration={configuration} />
        </MdxPage>
    );
}
