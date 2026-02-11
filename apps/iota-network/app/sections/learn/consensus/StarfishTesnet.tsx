import { BaseSectionProps } from '@repo/shared/interfaces';
import { HorizontalTitle, TitleTextSize } from 'react-ui-kit';

const WHY_BUILD_VERTICAL_TITLE_CONTENT = {
    title: ['Starfish on Testnet.', 'Why it’s next?'],
    subtitle:
        'Next-generation consensus improvements focused on robustness under adverse network conditions',
    body: 'In challenging conditions (partial connectivity, unstable routing, or adversarial timing), propagation and latency can degrade. Starfish is designed to keep consensus progress predictable and robust in those environments.',
};

export function StarfishTesnet({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-iota-neutral-98"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30 w-full">
                <HorizontalTitle
                    title={
                        Array.isArray(WHY_BUILD_VERTICAL_TITLE_CONTENT.title)
                            ? WHY_BUILD_VERTICAL_TITLE_CONTENT.title.map((line, index) => (
                                  <p key={index} className="whitespace-normal lg:whitespace-nowrap">
                                      {line}
                                  </p>
                              ))
                            : WHY_BUILD_VERTICAL_TITLE_CONTENT.subtitle
                    }
                    size={TitleTextSize.Medium}
                    subtitle={WHY_BUILD_VERTICAL_TITLE_CONTENT.subtitle}
                    body={WHY_BUILD_VERTICAL_TITLE_CONTENT.body}
                />
            </div>
        </section>
    );
}
