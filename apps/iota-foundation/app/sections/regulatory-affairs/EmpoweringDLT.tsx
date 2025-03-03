'use client';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle } from 'react-ui-kit';
import { EMPOWERING_DLT_TITLE_CONTENT } from './constants';

export function EmpoweringDLT({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-labs-neutral-100"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/purpose/how_we_get_there.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...EMPOWERING_DLT_TITLE_CONTENT} />
                    </div>
                </TwoColumnsImageTemplate>
            </div>
        </section>
    );
}
