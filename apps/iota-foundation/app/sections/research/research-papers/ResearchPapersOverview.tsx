import { BaseSectionProps } from '@repo/shared/interfaces';

const RESEARCH_PAPERS_OVERVIEW =
    'Our academic papers explore the Mainnet and other IOTA technologies, offering in-depth analysis, theoretical foundations, and practical implementations that drive the development of our protocol.';

export function ResearchPapersOverview({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-10 xs:py-16 lg:py-20 flex justify-center text-center">
                <p className="text-title-md text-darkest max-w-sm xs:max-w-3xl sm:max-w-lg lg:max-w-xl xl:max-w-[708px]">
                    {RESEARCH_PAPERS_OVERVIEW}
                </p>
            </div>
        </section>
    );
}
