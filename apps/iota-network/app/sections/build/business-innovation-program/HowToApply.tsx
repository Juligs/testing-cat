import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import { Actions, Button, IconContent, VerticalTitle } from 'react-ui-kit';
import { HOW_TO_APPLY_ICON_CONTENT, HOW_TO_APPLY_VERTICAL_TITLE_CONTENT } from './constants';

export function HowToApply({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30 items-center justify-center">
                <div className="max-w-[700px]">
                    <VerticalTitle {...HOW_TO_APPLY_VERTICAL_TITLE_CONTENT}>
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
                    </VerticalTitle>
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-6">
                    {HOW_TO_APPLY_ICON_CONTENT.map((data, index) => (
                        <div key={index} className="[&>div]:h-full">
                            <IconContent
                                title={data.title}
                                body={data.body}
                                icon={data.icon}
                                filled
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
