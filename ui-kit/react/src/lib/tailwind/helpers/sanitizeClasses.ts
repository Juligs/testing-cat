interface TailwindClassProperties {
    fontSize: string;
    lineHeight: string;
    letterSpacing?: string;
    fontWeight?: string | number;
    '@screen md'?: Partial<TailwindClassProperties>;
}

export type TailwindTextClasses = Record<string, TailwindClassProperties>;

export interface GroupedTextClasses {
    label: TailwindTextClasses;
    body: TailwindTextClasses;
    title: TailwindTextClasses;
    headline: TailwindTextClasses;
    display: TailwindTextClasses;
}

function removeResponsiveProperties(properties: TailwindClassProperties): TailwindClassProperties {
    const { '@screen md': _, ...cleanedProperties } = properties;
    return cleanedProperties;
}

const TEXT_CLASS_PREFIXES = {
    label: '.text-label',
    body: '.text-body',
    title: '.text-title',
    headline: '.text-headline',
    display: '.text-display',
};

function determineTextClassGroup(className: string): keyof GroupedTextClasses | null {
    if (className.startsWith(TEXT_CLASS_PREFIXES.label)) return 'label';
    if (className.startsWith(TEXT_CLASS_PREFIXES.body)) return 'body';
    if (className.startsWith(TEXT_CLASS_PREFIXES.title)) return 'title';
    if (className.startsWith(TEXT_CLASS_PREFIXES.headline)) return 'headline';
    if (className.startsWith(TEXT_CLASS_PREFIXES.display)) return 'display';
    return null;
}

function initializeGroupedClasses(): GroupedTextClasses {
    const keys: Array<keyof GroupedTextClasses> = ['label', 'body', 'title', 'headline', 'display'];
    return keys.reduce((acc, key) => {
        (acc as any)[key] = {};
        return acc;
    }, {} as GroupedTextClasses);
}

export function sanitizeTextClasses(classes: TailwindTextClasses): GroupedTextClasses {
    const groupedTextClasses: GroupedTextClasses = initializeGroupedClasses();

    Object.entries(classes).forEach(([className, properties]) => {
        const cleanedProperties = removeResponsiveProperties(properties);
        const classGroup = determineTextClassGroup(className);

        if (classGroup) {
            groupedTextClasses[classGroup][className] = cleanedProperties;
        }
    });

    return groupedTextClasses;
}
