import { useSyncExternalStore } from 'react';
import { BREAKPOINTS, ScreenSize } from 'react-ui-kit';

interface ScreenSizeState {
    width: number;
    height: number;
    size: ScreenSize;
}

const DEFAULT_STATE: ScreenSizeState = {
    width: 0,
    height: 0,
    size: ScreenSize.Xs,
};

let screenSizeCache: ScreenSizeState = DEFAULT_STATE;

function getSnapshot(): ScreenSizeState {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const size = getScreenSize(width);

    if (
        screenSizeCache.width === width &&
        screenSizeCache.height === height &&
        screenSizeCache.size === size
    ) {
        return screenSizeCache;
    }

    screenSizeCache = { width, height, size };
    return screenSizeCache;
}

function subscribe(callback: () => void): () => void {
    window.addEventListener('resize', callback);
    return () => window.removeEventListener('resize', callback);
}

export function useScreenSize(): ScreenSizeState {
    return useSyncExternalStore(subscribe, getSnapshot, () => DEFAULT_STATE);
}

function getScreenSize(width: number): ScreenSize {
    const breakpointEntries = Object.entries(BREAKPOINTS);
    // Sort in ascending order to check smallest breakpoints first
    breakpointEntries.sort((a, b) => a[1] - b[1]);

    for (const [size, breakpoint] of breakpointEntries) {
        if (width <= breakpoint) {
            return size as ScreenSize;
        }
    }

    return ScreenSize.Xl;
}
