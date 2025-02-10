import { Quotes } from '@repo/icons';
import { BaseSectionProps } from '../../interfaces';
import { MULTIKNIP_QUOTE_CONTENT, MULTIKNIP_TITLE_CONTENT } from './constants';

export function MultiKnipQuotes({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-10 xs:py-12 flex justify-center text-center flex flex-col gap-10 items-center text-darkest">
                <div className="flex flex-col gap-6 items-center">
                    <Quotes className="w-16 h-16 text-network-primary-30" />
                    <p className="text-title-md max-w-sm xs:max-w-3xl sm:max-w-lg md:max-w-xl lg:max-w-2xl font-semibold">
                        {MULTIKNIP_TITLE_CONTENT}
                    </p>
                </div>
                <div className="flex items-center gap-x-6">
                    <img
                        src={MULTIKNIP_QUOTE_CONTENT.image}
                        alt={MULTIKNIP_QUOTE_CONTENT.name}
                        className="w-16 h-16 rounded-full"
                    />
                    <div className="flex flex-col items-start">
                        <span className="text-label-lg">{MULTIKNIP_QUOTE_CONTENT.name}</span>
                        <p className="text-body-md">{MULTIKNIP_QUOTE_CONTENT.roleDescription}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
