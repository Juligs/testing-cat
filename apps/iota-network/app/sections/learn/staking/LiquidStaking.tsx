import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { LIQUID_STAKING_VERTICAL_TITLE_CONTENT, LIQUID_STAKING_ICON_CONTENT } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, IconContent, VerticalTitle } from 'react-ui-kit';
import Link from 'next/link';

export function LiquidStaking({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/shared/liquid_staking.png">
                    <VerticalTitle {...LIQUID_STAKING_VERTICAL_TITLE_CONTENT}>
                        <Actions>
                            <Link
                                href="https://swirlstake.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Go to the app"
                            >
                                <Button text="Learn more" icon />
                            </Link>
                        </Actions>
                    </VerticalTitle>
                </TwoColumnsImageTemplate>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-6">
                    {LIQUID_STAKING_ICON_CONTENT.map((data, index) => (
                        <IconContent
                            key={index}
                            title={data.title}
                            body={data.body}
                            icon={data.icon}
                            filled
                        ></IconContent>
                    ))}
                </div>
            </div>
        </section>
    );
}
