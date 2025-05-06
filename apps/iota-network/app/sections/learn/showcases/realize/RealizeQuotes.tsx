import { Quotes } from '@repo/icons';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { REALIZE_QUOTE_CONTENT, REALIZE_TITLE_CONTENT } from './constants';
import Image from 'next/image';

export function RealizeQuotes({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-10 xs:py-12 flex justify-center text-center  flex-col gap-10 items-center text-darkest">
                <div className="flex flex-col gap-6 items-center">
                    <Quotes className="w-16 h-16 color-icon-content" />
                    <p className="text-title-md max-w-sm xs:max-w-3xl sm:max-w-lg md:max-w-xl lg:max-w-2xl font-semibold">
                        {REALIZE_TITLE_CONTENT}
                    </p>
                </div>
                <div className="flex items-center gap-x-6">
                    <Image
                        src={REALIZE_QUOTE_CONTENT.image}
                        alt={REALIZE_QUOTE_CONTENT.name}
                        width={64}
                        height={64}
                        className="rounded-full"
                    />
                    <div className="flex flex-col items-start">
                        <span className="text-label-lg">{REALIZE_QUOTE_CONTENT.name}</span>
                        <p className="text-body-md">{REALIZE_QUOTE_CONTENT.roleDescription}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
