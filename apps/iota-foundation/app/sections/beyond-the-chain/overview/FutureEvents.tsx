import { BaseSectionProps } from '@repo/shared/interfaces';
import { CtaCard } from 'react-ui-kit';
import { FUTURE_EVENTS_CTA_CARD } from './constants';

export function FutureEvents({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30">
                <CtaCard {...FUTURE_EVENTS_CTA_CARD} brand aspectVideo />
            </div>
        </section>
    );
}
