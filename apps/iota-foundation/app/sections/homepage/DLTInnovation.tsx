import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, ButtonVariant, VerticalTitle } from 'react-ui-kit';
import { DLT_INNOVATION_TITLE_CONTENT } from './constants';
import Link from 'next/link';

export function DLTInnovation({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-labs-neutral-100"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/homepage/DLT-Innovation/research.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...DLT_INNOVATION_TITLE_CONTENT}>
                            <Actions>
                                <Link href="/research/our-research" aria-label="Research">
                                    <Button variant={ButtonVariant.Primary} text="Research" icon />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
            </div>
        </section>
    );
}
