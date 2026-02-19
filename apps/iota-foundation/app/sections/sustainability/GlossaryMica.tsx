import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import { GlossaryMicaLayout } from './components/GlossaryMicaLayout';

const DISCLAIMER_TEXT = {
    title: 'Disclaimer',
    link: 'https://webgate.ec.europa.eu/regdel/#/delegatedActs/2463?lang=en',
    text: '² We derive the values of the electricity sources of relevant countries and calculate a renewable energy share. Considering node locations and node counts, we are able to derive the total renewable energy consumption of the network. (Comparison: US, 20.7 %. Germany, 41.2 %.)',
};

export function GlossaryMica({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="container w-full flex flex-col gap-10 xs:gap-12 py-12 xs:py-20"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <h2 className="text-darkest text-headline-sm">Glossary</h2>
            <GlossaryMicaLayout />
            <div className="flex flex-col text-light">
                <p className="text-label-md">{DISCLAIMER_TEXT.title}</p>
                <div className="flex flex-row text-body-sm gap-1 ">
                    <span>¹</span>
                    <Link
                        href={DISCLAIMER_TEXT.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-words overflow-hidden"
                    >
                        {DISCLAIMER_TEXT.link}
                    </Link>
                </div>

                <p className="text-body-sm">{DISCLAIMER_TEXT.text}</p>
            </div>
        </section>
    );
}
