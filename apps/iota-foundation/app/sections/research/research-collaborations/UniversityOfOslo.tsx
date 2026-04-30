import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, VerticalTitle } from 'react-ui-kit';
import { UNIVERSITY_OF_OSLO_TITLE_CONTENT, UNIVERSITY_OF_OSLO_BUTTONS } from './constants';
import Link from 'next/link';

export function UniversityOfOslo({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-labs-neutral-100"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate
                    image="/research/research_collaborations/university_oslo.png"
                    reverse
                >
                    <div className="sm:pl-[92px] lg:pl-[102px] text-center">
                        <VerticalTitle {...UNIVERSITY_OF_OSLO_TITLE_CONTENT}>
                            <div className="flex gap-4">
                                {UNIVERSITY_OF_OSLO_BUTTONS.map((button, index) => (
                                    <Actions key={index}>
                                        <Link
                                            href={button.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button {...button} icon />
                                        </Link>
                                    </Actions>
                                ))}
                            </div>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
            </div>
        </section>
    );
}
