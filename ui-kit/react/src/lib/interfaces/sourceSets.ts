import { ScreenSize } from '@lib/server';

export interface SourceSet {
    type?: string;
    src: string;
}

export type SourceSets = Partial<Record<ScreenSize, SourceSet>>;
