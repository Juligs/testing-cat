type EnumOptions<T> = {
    control: { type: 'select'; labels: Record<keyof T, string> };
    options: (keyof T)[];
};

function getEnumLabels<T extends object>(enumObject: T): Record<keyof T, string> {
    const entriesMapped = Object.entries(enumObject).map(([key, value]) => [value, key]);
    return Object.fromEntries(entriesMapped);
}

export function getStoryEnumOptions<T extends object>(enumObject: T): EnumOptions<T> {
    return {
        control: { type: 'select', labels: getEnumLabels(enumObject) },
        options: Object.values(enumObject) as (keyof T)[],
    };
}
