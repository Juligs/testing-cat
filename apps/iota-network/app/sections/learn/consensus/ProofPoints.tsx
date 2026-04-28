import { BaseSectionProps } from '@repo/shared/interfaces';
import { IconContent, VerticalTitle } from 'react-ui-kit';
import { PROOF_POINTS_VERTICAL_TITLE, PROOF_POINTS_ICON_CONTENT } from './constants';

export function ProofPoints({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20">
                <div className="max-w-[586px]">
                    <VerticalTitle {...PROOF_POINTS_VERTICAL_TITLE} />
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6">
                    {PROOF_POINTS_ICON_CONTENT.map((data, index) => (
                        <IconContent key={index} {...data} filled />
                    ))}
                </div>
            </div>
        </section>
    );
}
