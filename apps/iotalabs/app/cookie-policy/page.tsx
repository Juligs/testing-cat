'use client';

import { CookieLibrary } from '@boxfish-studio/react-cookie-manager';

import './CookiePolicy.scss';
import { MdxPageHero } from 'app/(mdx-pages)/components';

export default function CookiePolicy() {
    const configuration = {};
    return (
        <>
            <MdxPageHero />
            <section className="container flex flex-col w-full justify-center items-center py-30">
                <div className="prose prose-labs max-w-full">
                    <CookieLibrary configuration={configuration} />
                </div>
            </section>
        </>
    );
}
