import { BaseSectionProps } from '../../interfaces';
import { MoreToExplore } from '../../components';
import { KYC_MORE_TO_EXPLORE_CONTENT } from './constants';

export function KYCMoreToExplore({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-theme={theme}>
            <MoreToExplore content={KYC_MORE_TO_EXPLORE_CONTENT} text="More to Explore" />
        </section>
    );
}
