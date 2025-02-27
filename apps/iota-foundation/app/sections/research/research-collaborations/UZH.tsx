import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, VerticalTitle } from 'react-ui-kit';
import { UZH_TITLE_CONTENT, UZH_BUTTONS } from './constants';
import Link from 'next/link';
import { ArrowTopRight } from '@repo/icons';

export function UZH({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-labs-neutral-100"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/research/research_collaborations/UZH.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...UZH_TITLE_CONTENT}>
                            <div className="flex gap-4">
                                {UZH_BUTTONS.map((button, index) => (
                                    <Actions key={index}>
                                        <Link
                                            href={button.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button {...button} icon={<ArrowTopRight />} />
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
