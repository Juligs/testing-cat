import { BaseSectionProps } from '@repo/shared/interfaces';
import { MoreToExplore } from '@repo/shared/components';
import { STAKING_MORE_TO_EXPLORE_CONTENT } from './constants';

export function StakingMoreToExplore({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <MoreToExplore content={STAKING_MORE_TO_EXPLORE_CONTENT} text="More to Explore" />
        </section>
    );
}
