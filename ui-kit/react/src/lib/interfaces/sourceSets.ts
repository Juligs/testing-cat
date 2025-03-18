import { ScreenSize } from '@lib/server';

export interface SourceSet {
    sources?: { src: string; type: string }[];
    src?: string;
    type?: string;
}

export type SourceSets = Partial<Record<ScreenSize, SourceSet>>;
