'use client';

import { clampValue } from '@lib/utils/clampValue';
import { EDGE_MARGIN, TOOLTIP_OFFSET } from '@sections/sustainability/constants';
import { useLayoutEffect, useRef, useState } from 'react';

export function useTooltip(containerRef: React.RefObject<HTMLDivElement | null>) {
    const tooltipRef = useRef<HTMLDivElement | null>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [style, setStyle] = useState<React.CSSProperties>();

    const setFromEvent = (e: React.MouseEvent) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();

        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const setFromSvg = (svg: SVGSVGElement) => {
        if (!containerRef.current) return;

        const iconRect = svg.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();

        setPosition({
            x: iconRect.left - containerRect.left + iconRect.width / 2,
            y: iconRect.top - containerRect.top,
        });
    };

    useLayoutEffect(() => {
        if (!tooltipRef.current || !containerRef.current) return;

        const tooltipWidth = tooltipRef.current.offsetWidth;
        const tooltipHeight = tooltipRef.current.offsetHeight;

        const containerRect = containerRef.current.getBoundingClientRect();
        const viewportWidth = window.innerWidth;

        const rawLeft = position.x + TOOLTIP_OFFSET;
        const rawTopAbove = position.y - tooltipHeight - TOOLTIP_OFFSET;
        const rawTopBelow = position.y + TOOLTIP_OFFSET;

        const top = rawTopAbove < EDGE_MARGIN ? rawTopBelow : rawTopAbove;

        const maxLeft = Math.min(containerRect.width, viewportWidth - EDGE_MARGIN);

        const left = clampValue(rawLeft, EDGE_MARGIN, maxLeft - tooltipWidth);

        setStyle({
            left,
            top: clampValue(top, EDGE_MARGIN, containerRect.height - tooltipHeight - EDGE_MARGIN),
        });
    }, [position]);

    return { tooltipRef, style, setFromEvent, setFromSvg };
}
