import { MenuSection } from '@components';
import { SHOWCASES } from '@sections/learn/showcases/constants/showcasesContent.constants';
import { ShowcaseCategory } from '@sections/learn/showcases/showcasesProjects.enums';

const ORDERED_CATEGORIES: ShowcaseCategory[] = [
    ShowcaseCategory.RealWorldAdoption,
    ShowcaseCategory.LighthouseProjects,
];

export function getDynamicSideMenu(): MenuSection[] {
    const menu: Record<string, MenuSection['links']> = {};

    for (const category of ORDERED_CATEGORIES) {
        menu[category] = [];
    }

    for (const [slug, showcase] of Object.entries(SHOWCASES)) {
        const category = showcase.category as ShowcaseCategory;
        if (!ORDERED_CATEGORIES.includes(category)) continue;

        const text = showcase.frame?.verticalTitle?.title ?? slug;
        const href = `/learn/showcases/${slug}`;

        menu[category]!.push({
            text,
            href,
            isExternal: false,
        });
    }

    for (const category of ORDERED_CATEGORIES) {
        menu[category]?.sort((a, b) => a.text.localeCompare(b.text));
    }

    return ORDERED_CATEGORIES.map((category) => ({
        title: category,
        links: menu[category] ?? [],
    }));
}
