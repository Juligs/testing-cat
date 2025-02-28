import { BaseSectionProps } from '@repo/shared/interfaces';

const TEAM_AND_CAREERS_OVERVIEW =
    'The IOTA Foundation is made up of a group of diverse people, cultures and expertise, distributed across the globe, united by one shared vision.';

export function TeamAndCareersOverview({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-10 xs:py-16 lg:py-20 flex justify-center text-center">
                <p className="text-title-md text-darkest max-w-sm xs:max-w-3xl sm:max-w-lg lg:max-w-xl xl:max-w-[708px] font-semibold">
                    {TEAM_AND_CAREERS_OVERVIEW}
                </p>
            </div>
        </section>
    );
}
