import { BaseSectionProps } from '@repo/shared/interfaces';
import { TWIN_TITLE_CONTAINER, TWIN_CONTAINER_CONTENT } from './constants';
import { StackContainerWithAnchorLinks } from '@components';

export function TWINIotaTechnology({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="bg-iota-neutral-98"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30 flex justify-center items-center w-full">
                <StackContainerWithAnchorLinks
                    title={TWIN_TITLE_CONTAINER}
                    stacks={TWIN_CONTAINER_CONTENT}
                />
            </div>
        </section>
    );
}
