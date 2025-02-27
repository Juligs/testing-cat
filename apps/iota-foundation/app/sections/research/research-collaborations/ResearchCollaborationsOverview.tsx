import { BaseSectionProps } from '@repo/shared/interfaces';

const OUR_RESEARCH_OVERVIEW =
    'Collaborating with leading research institutes to advance the state of the art of distributed ledger technology';

export function ResearchCollaborationsOverview({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-10 xs:py-16 lg:py-20 flex justify-center text-center">
                <p className="text-headline-sm text-darkest max-w-sm xs:max-w-3xl sm:max-w-lg lg:max-w-xl xl:max-w-[708px] font-semibold">
                    {OUR_RESEARCH_OVERVIEW}
                </p>
            </div>
        </section>
    );
}
