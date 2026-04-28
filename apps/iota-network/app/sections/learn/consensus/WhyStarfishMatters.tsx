import { BaseSectionProps } from '@repo/shared/interfaces';
import { TitleTextSize, VerticalTitle } from 'react-ui-kit';

const WHY_STARFISH_VERTICAL_TITLE: React.ComponentProps<typeof VerticalTitle> = {
    overline: 'Why Starfish matters',
    title: "Reliability isn't optional when global operations are on the line",
    subtitle:
        "Slowdowns and delays are part of operating at scale. Starfish ensures they don't become your problem.",
    size: TitleTextSize.Small,
};

export function WhyStarfishMatters({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-10 xs:py-16 lg:py-20 flex justify-center text-center">
                <div className="max-w-[586px]">
                    <VerticalTitle {...WHY_STARFISH_VERTICAL_TITLE} isCentered />
                </div>
            </div>
        </section>
    );
}
