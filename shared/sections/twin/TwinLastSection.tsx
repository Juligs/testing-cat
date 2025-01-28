import { BaseSectionProps } from '../../interfaces';
import { MoreToExplore } from '../../components';
import { TWIN_LAST_SECTION_LINKS } from './constants';

export function TwinLastSection({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-theme={theme}>
            <MoreToExplore content={TWIN_LAST_SECTION_LINKS} text="More to Explore" />
        </section>
    );
}
