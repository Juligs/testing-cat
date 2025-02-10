import { HiglitedHeroText } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function IotaGrantsOverview({ id, navbarColorScheme }: BaseSectionProps) {
    const TEXT =
        'IOTA Grants range from funding innovative IOTA projects and initiatives to research grants and scholarships at the cutting-edge of DLT research. Discover how you can use their programs to turn your ideas into reality.';

    return (
        <section
            className="w-full bg-labs-neutral-100"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <HiglitedHeroText text={TEXT} />
        </section>
    );
}
