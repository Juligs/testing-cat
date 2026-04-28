import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle } from 'react-ui-kit';
import { MYSTICETI_VERTICAL_TITLE, MYSTICETI_SMALL_VERTICAL_TITLE } from './constants';
import { VerticalTitleWithIcon } from './constants/components/VerticalTitleWithIcon';

export function Mysticeti({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-iota-neutral-98"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 justify-center items-center text-center">
                <VerticalTitle {...MYSTICETI_VERTICAL_TITLE} isCentered />
                <div className="grid grid-cols-1 xs:grid-cols-3 gap-6 max-w-[952px]">
                    {MYSTICETI_SMALL_VERTICAL_TITLE.map((data, index) => (
                        <VerticalTitleWithIcon key={index} {...data} />
                    ))}
                </div>
            </div>
        </section>
    );
}
