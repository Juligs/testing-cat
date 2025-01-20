import { useEffect, useState, useCallback } from 'react';
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

export function useScreenSize(): ScreenSizeState {
    const [screenSize, setScreenSize] = useState<ScreenSizeState>(() => {
        if (typeof window === 'undefined') return DEFAULT_STATE;

        return {
            width: window.innerWidth,
            height: window.innerHeight,
            size: getScreenSize(window.innerWidth),
        };
    });

    const handleResize = useCallback(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        setScreenSize({
            width,
            height,
            size: getScreenSize(width),
        });
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    return screenSize;
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
