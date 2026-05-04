import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, ImageCard, IconContent, HorizontalTitle, TextLink } from 'react-ui-kit';
import {
    WHAT_IS_SUPPORTED_IMAGE_CARD,
    WHAT_IS_SUPPORTED_HORIZONTAL_TITLE,
    WHAT_IS_SUPPORTED_ICON_CONTENT,
} from './constants';
import Link from 'next/link';

export function WhatIsSupported({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <HorizontalTitle {...WHAT_IS_SUPPORTED_HORIZONTAL_TITLE}>
                    <Actions>
                        <Link
                            href="https://airtable.com/appoUvqpIo5bkDoSO/pag16jQChVVMh3zyh/form?ref=blog.iota.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Go to the form"
                        >
                            <Button text="Apply now" icon />
                        </Link>
                    </Actions>
                </HorizontalTitle>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-6">
                    {WHAT_IS_SUPPORTED_IMAGE_CARD.map((data, index) => (
                        <ImageCard key={index} isHoverable={false} {...data} />
                    ))}
                    <IconContent {...WHAT_IS_SUPPORTED_ICON_CONTENT}>
                        <Actions>
                            <Link
                                href="https://iotalabs.io/grants"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Go to the website"
                            >
                                <TextLink text="IOTA Grants" showIcon />
                            </Link>
                        </Actions>
                    </IconContent>
                </div>
            </div>
        </section>
    );
}
