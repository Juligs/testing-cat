import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle, Actions, Button, IconContent } from 'react-ui-kit';
import { COMBINING_DAG_VERTICAL_TITLE, COMBINING_DAG_ICON_CONTENT } from './constants';
import Link from 'next/link';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { ArrowTopRight } from '@repo/icons';

export function CombiningDAG({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/shared/combining_dag.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...COMBINING_DAG_VERTICAL_TITLE}>
                            <Actions>
                                <Link
                                    href="https://docs.iota.org/developer/getting-started/"
                                    target="_blank"
                                    rel="nopener noreferrer"
                                    aria-label="Go to the documentation"
                                >
                                    <Button text="Get started" icon={<ArrowTopRight />} />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
                <div className="grid grid-cols-1 xs:grid-cols-3 gap-6">
                    {COMBINING_DAG_ICON_CONTENT.map((data, index) => (
                        <IconContent {...data} key={index} filled />
                    ))}
                </div>
            </div>
        </section>
    );
}
