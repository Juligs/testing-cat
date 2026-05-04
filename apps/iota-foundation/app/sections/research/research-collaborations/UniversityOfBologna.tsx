import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, VerticalTitle } from 'react-ui-kit';
import { UNIVERSITY_OF_BOLOGNA_TITLE_CONTENT } from './constants';
import Link from 'next/link';

export function UniversityOfBologna({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-labs-neutral-100"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate
                    image="/research/research_collaborations/university_bologna.png"
                    reverse
                >
                    <div className="sm:pl-[92px] lg:pl-[102px] text-center">
                        <VerticalTitle {...UNIVERSITY_OF_BOLOGNA_TITLE_CONTENT}>
                            <Actions>
                                <Link
                                    href="https://phd.unibo.it/last-jd/en/program"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="University of Bologna official website"
                                >
                                    <Button text="Learn More" icon />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
            </div>
        </section>
    );
}
