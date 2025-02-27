import { BaseSectionProps } from '@repo/shared/interfaces';
import { HorizontalTitle, IconContent } from 'react-ui-kit';
import { EFFORTS_ICON_CONTENT, EFFORTS_HORIZONTAL_TITLE } from './constants';

export function Efforts({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <div className="w-full">
                    <HorizontalTitle {...EFFORTS_HORIZONTAL_TITLE} />
                </div>
                <div className="grid grid-cols-1  sm:grid-cols-3 gap-6">
                    {EFFORTS_ICON_CONTENT.map((data, index) => (
                        <IconContent key={index} {...data} />
                    ))}
                </div>
            </div>
        </section>
    );
}
