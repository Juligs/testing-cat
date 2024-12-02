import { ScreenSize, SourceSet, SourceSets } from '@lib/server';

export function sortMediaSourcesByBreakpoint(srcset: SourceSets): [ScreenSize, SourceSet][] {
    return Object.entries(srcset).sort(([a], [b]) => Number(b) - Number(a)) as [
        ScreenSize,
        SourceSet,
    ][];
}
