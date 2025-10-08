import { BaseSectionProps } from '@repo/shared/interfaces';
import { HorizontalTitle } from 'react-ui-kit';
import { COLLABORATIVE_COMMUNITY_TITLE_CONTENT } from './constants';

export function CollaborativeCommunity({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30">
                <HorizontalTitle {...COLLABORATIVE_COMMUNITY_TITLE_CONTENT} />
            </div>
        </section>
    );
}
