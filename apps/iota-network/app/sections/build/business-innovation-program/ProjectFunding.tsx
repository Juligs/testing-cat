import { BaseSectionProps } from '@repo/shared/interfaces';
import {
    VerticalTitle,
    Actions,
    DisplayStats,
    Button,
    TextSize,
    ButtonVariant,
} from 'react-ui-kit';
import { PROJECT_FUNDING_VERTICAL_TITLE, PROJECT_FUNDING_STATS_CONTENT } from './constants';
import Link from 'next/link';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { ArrowTopRight } from '@repo/icons';

export function ProjectFunding({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/build/business-innovation/fuelling_innovation.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...PROJECT_FUNDING_VERTICAL_TITLE}>
                            <Actions>
                                <Link
                                    href="https://blog.iota.org/iota-business-innovation-program/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button text="Blog post" icon={<ArrowTopRight />} />
                                </Link>
                                <Link href="/learn/showcases#rwa">
                                    <Button
                                        text="Explore participant projects"
                                        icon={<ArrowTopRight />}
                                        variant={ButtonVariant.Secondary}
                                    />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {PROJECT_FUNDING_STATS_CONTENT.map((data, index) => (
                        <DisplayStats key={index} {...data} textSize={TextSize.Small} />
                    ))}
                </div>
            </div>
        </section>
    );
}
