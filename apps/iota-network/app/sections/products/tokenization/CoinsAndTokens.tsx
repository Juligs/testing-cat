import {
    COINS_AND_TOKENS_VERTICAL_TITLE_CONTENT,
    COINS_AND_TOKENS_ICON_CONTENT,
} from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import { Actions, IconContent, TextLink, VerticalTitle } from 'react-ui-kit';

export function CoinsAndsTokens({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30 items-center justify-center">
                <div className="max-w-[700px]">
                    <VerticalTitle {...COINS_AND_TOKENS_VERTICAL_TITLE_CONTENT} isCentered />
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-3 gap-6">
                    {COINS_AND_TOKENS_ICON_CONTENT.map((data, index) => (
                        <div key={index} className="[&>div]:h-full">
                            <IconContent
                                title={data.title}
                                body={data.body}
                                icon={data.icon}
                                filled
                            >
                                <Actions>
                                    <Link
                                        href={data.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Link to ${data.title} documentation`}
                                    >
                                        <TextLink text="Learn more" showIcon />
                                    </Link>
                                </Actions>
                            </IconContent>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
