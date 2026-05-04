import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { WHY_MOVE_VERTICAL_TITLE_CONTENT, WHY_MOVE_ICON_CONTENT } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, IconContent, VerticalTitle } from 'react-ui-kit';
import Link from 'next/link';

export function WhyMove({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/learn/move/why-move.png">
                    <VerticalTitle {...WHY_MOVE_VERTICAL_TITLE_CONTENT}>
                        <Actions>
                            <Link
                                href="https://docs.iota.org/about-iota/why-move"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Go to documentation"
                            >
                                <Button text="Learn more" icon />
                            </Link>
                        </Actions>
                    </VerticalTitle>
                </TwoColumnsImageTemplate>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-6">
                    {WHY_MOVE_ICON_CONTENT.map((data) => (
                        <div key={data.title} className="h-full">
                            <IconContent title={data.title} body={data.body} icon={data.icon} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
