import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle, IconContent, Actions, TextLink } from 'react-ui-kit';
import { DLT_LEADER_VERTICAL_TITLE, DLT_LEADER_ICON_CONTENT } from './constants';
import Link from 'next/link';
import { TwoColumnsImageTemplate } from '@repo/shared/components';

export function DLTLeader({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/research/our-research/DLT_leader.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...DLT_LEADER_VERTICAL_TITLE} />
                    </div>
                </TwoColumnsImageTemplate>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {DLT_LEADER_ICON_CONTENT.map((data, index) => (
                        <IconContent
                            key={index}
                            title={data.title}
                            body={data.body}
                            icon={data.icon}
                        >
                            <Actions>
                                <Link
                                    href={data.link}
                                    target={data.isExternal ? '_blank' : undefined}
                                    rel={data.isExternal ? 'noopener noreferrer' : undefined}
                                >
                                    <TextLink text="Read more" showIcon />
                                </Link>
                            </Actions>
                        </IconContent>
                    ))}
                </div>
            </div>
        </section>
    );
}
