import { BaseSectionProps } from '@repo/shared/interfaces';
import { MoreToExplore } from '@repo/shared/components';
import { LEARN_MORE_TO_EXPLORE_CONTENT as MORE_TO_EXPLORE_CONTENT } from './constants';

export function IntroMoreToExplore({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <MoreToExplore content={MORE_TO_EXPLORE_CONTENT} text="More to Explore" />
        </section>
    );
}
