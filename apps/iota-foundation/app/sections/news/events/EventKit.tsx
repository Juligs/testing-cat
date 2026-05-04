'use client';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, ButtonVariant, VerticalTitle } from 'react-ui-kit';
import Link from 'next/link';

export const EVENT_KIT_CONTENT = {
    title: 'Level-Up Your Next Event',
    body: 'Highlight your next community networking night or meet-up with our brand library. It provides all the materials you need to create banners, posters, presentations and more for a professional event.',
};

export function EventKit({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-labs-neutral-100"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/news/events/event_kit.png" reverse>
                    <div className="sm:pl-[92px] lg:pl-[102px] text-center">
                        <VerticalTitle {...EVENT_KIT_CONTENT}>
                            <Actions>
                                <Link
                                    href="https://assets.iota.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Go to the IOTA Brand Library"
                                >
                                    <Button
                                        variant={ButtonVariant.Primary}
                                        text="Show assets"
                                        icon
                                    />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
            </div>
        </section>
    );
}
