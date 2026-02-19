'use client';

import { AxisBottom } from '@visx/axis';
import { curveCatmullRom as curve } from '@visx/curve';
import { localPoint } from '@visx/event';
import { scaleLinear } from '@visx/scale';
import { AreaClosed, LinePath } from '@visx/shape';
import { useTooltip, useTooltipInPortal } from '@visx/tooltip';
import { bisector, extent } from 'd3-array';
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { throttle } from 'throttle-debounce';
import { GraphTooltipContainer } from './GraphTooltipContent';

let idCounter = 0;

function getID(prefix: string) {
    return `${prefix}_${idCounter++}`;
}

const bisectX = bisector((x: number) => x).center;

type AreaGraphProps<D> = {
    data: D[];
    width: number;
    height: number;
    getX: (element: D) => number;
    getY: (element: D) => number;
    tooltipContent?: (props: { data: D }) => ReactNode;
};

export function AreaGraph<D>({
    data,
    width,
    height,
    getX,
    getY,
    tooltipContent,
}: AreaGraphProps<D>): JSX.Element | null {
    const graphTop = 1;
    const graphBottom = Math.max(0, height - 30);
    const graphLeft = 30;
    const graphRight = width - 30;
    const [fillGradientID] = useState(() => getID('areaGraph_fillGradient'));
    const [lineGradientID] = useState(() => getID('areaGraph_lineGradient'));
    const [patternID] = useState(() => getID('areaGraph_pattern'));
    const { TooltipInPortal, containerRef } = useTooltipInPortal({
        scroll: true,
        detectBounds: true,
    });
    const sortedData = useMemo(() => [...data].sort((a, b) => getX(a) - getX(b)), [data, getX]);

    const { tooltipOpen, hideTooltip, showTooltip, tooltipData, tooltipLeft, tooltipTop } =
        useTooltip<D>({
            tooltipLeft: 0,
            tooltipTop: 0,
        });

    const xScale = useMemo(
        () =>
            scaleLinear<number>({
                domain: extent(data, getX) as [number, number],
                range: [graphLeft, graphRight],
            }),
        [data, graphLeft, graphRight, getX],
    );

    const axisTicks = useMemo(() => {
        if (sortedData.length === 0) return [];

        const firstPoint = sortedData[0]!;
        const lastPoint = sortedData.at(-1)!;
        const middlePoint = sortedData[Math.floor(sortedData.length / 2)]!;

        return [getX(firstPoint), getX(middlePoint), getX(lastPoint)];
    }, [sortedData, getX]);
    const xValues = useMemo(() => sortedData.map(getX), [sortedData, getX]);

    const yScale = useMemo(() => {
        const [min, max] = extent(data, getY) as [number, number];
        return scaleLinear<number>({
            domain: [min - min * 0.3, max],
            range: [graphBottom, graphTop],
            nice: true,
        });
    }, [data, graphTop, graphBottom, getY]);

    const handleTooltip = useCallback(
        (x: number) => {
            const selectedData = data[bisectX(data.map(getX), xScale.invert(x), 0)];

            if (!selectedData) {
                return;
            }

            const left = xScale(getX(selectedData));
            const top = yScale(getY(selectedData));

            showTooltip({
                tooltipData: selectedData,
                tooltipLeft: left,
                tooltipTop: top,
            });
        },
        [tooltipContent, sortedData, xValues, xScale, yScale, getX, getY, showTooltip],
    );

    const [handleTooltipThrottled, setHandleTooltipThrottled] =
        useState<ReturnType<typeof throttle>>();

    const handleTooltipThrottledRef = useRef<ReturnType<typeof throttle>>();

    useEffect(() => {
        handleTooltipThrottledRef.current = throttle(100, handleTooltip);
        setHandleTooltipThrottled(() => handleTooltipThrottledRef.current);
        return () => {
            handleTooltipThrottledRef?.current?.cancel?.();
        };
    }, [handleTooltip]);

    const tooltipContentProps = useMemo(
        () => (tooltipData ? { data: tooltipData } : null),
        [tooltipData],
    );

    const formatMonthYear = (x: number) => {
        const d = new Date(x);
        const month = String(d.getUTCMonth() + 1).padStart(2, '0');
        const year = String(d.getUTCFullYear()).slice(-2);
        return `${month}/${year}`;
    };

    const tooltipTopAdj = tooltipTop ? Math.max(tooltipTop - 30, 0) : undefined;

    return (
        <div className="relative h-full w-full overflow-hidden" ref={containerRef}>
            {tooltipOpen && tooltipContentProps && tooltipContent ? (
                <TooltipInPortal
                    left={tooltipLeft}
                    top={tooltipTopAdj}
                    className="pointer-events-none absolute z-10 h-0 w-max overflow-visible bg-black"
                    unstyled
                >
                    <GraphTooltipContainer>
                        {tooltipContent(tooltipContentProps)}
                    </GraphTooltipContainer>
                </TooltipInPortal>
            ) : null}
            <svg width={width} height={height}>
                <defs>
                    <linearGradient id={fillGradientID} gradientTransform="rotate(90)">
                        <stop
                            stopColor="currentColor"
                            stopOpacity={0.16}
                            className="text-[#0067EE]"
                        />
                        <stop
                            offset="1"
                            stopColor="currentColor"
                            stopOpacity={0}
                            className="text-[#0067EE]"
                        />
                    </linearGradient>
                    <linearGradient id={lineGradientID}>
                        <stop stopColor="currentColor" className="text-foundation-primary-40" />
                    </linearGradient>
                </defs>
                <AreaClosed<D>
                    curve={curve}
                    data={sortedData}
                    yScale={yScale}
                    x={(d) => xScale(getX(d))}
                    y={(d) => yScale(getY(d))}
                    fill={`url(#${fillGradientID})`}
                    stroke="transparent"
                />
                <AreaClosed<D>
                    curve={curve}
                    data={sortedData}
                    yScale={yScale}
                    x={(d) => xScale(getX(d))}
                    y={(d) => yScale(getY(d))}
                    fill={`url(#${patternID})`}
                    stroke="transparent"
                />
                <LinePath<D>
                    curve={curve}
                    data={sortedData}
                    x={(d) => xScale(getX(d))}
                    y={(d) => yScale(getY(d))}
                    stroke={`url(#${lineGradientID})`}
                    strokeWidth="2"
                />
                <AxisBottom
                    top={height - 24}
                    scale={xScale}
                    tickValues={axisTicks}
                    hideTicks
                    hideAxisLine
                >
                    {(axis) =>
                        axis.ticks.map((tick, i) => {
                            const isFirst = i === 0;
                            const isLast = i === axis.ticks.length - 1;

                            return (
                                <g
                                    key={tick.value.valueOf()}
                                    transform={`translate(${tick.to.x}, ${tick.to.y})`}
                                >
                                    <text
                                        textAnchor="middle"
                                        dx={isFirst ? '1em' : isLast ? '-1em' : 0}
                                        dy="0.71em"
                                        className="text-label-lg text-iota-neutral-60"
                                        fill="currentColor"
                                    >
                                        {formatMonthYear(tick.value.valueOf())}
                                    </text>
                                </g>
                            );
                        })
                    }
                </AxisBottom>

                {tooltipOpen ? (
                    <>
                        <line
                            x1={tooltipLeft}
                            x2={tooltipLeft}
                            y1={graphTop}
                            y2={graphBottom}
                            stroke="currentColor"
                            strokeWidth={2}
                            className="text-transparency-primary-foundation-16"
                            pointerEvents="none"
                        />
                        <circle
                            cx={tooltipLeft}
                            cy={tooltipTop}
                            r={4}
                            fill="currentColor"
                            className="text-foundation-primary-20"
                            pointerEvents="none"
                        />
                    </>
                ) : null}
                {tooltipContent ? (
                    <rect
                        x={0}
                        y={0}
                        width={width}
                        height={height}
                        fill="transparent"
                        stroke="none"
                        onMouseEnter={(e) => {
                            handleTooltipThrottled?.(localPoint(e)?.x || graphLeft);
                        }}
                        onMouseMove={(e) => {
                            const p = localPoint(e)?.x;
                            if (p == null) return;

                            const correctedX = Math.max(graphLeft, Math.min(graphRight, p));
                            handleTooltipThrottled?.(correctedX);
                        }}
                        onMouseLeave={() => {
                            handleTooltipThrottled?.cancel({
                                upcomingOnly: true,
                            });
                            hideTooltip();
                        }}
                    />
                ) : null}
            </svg>
        </div>
    );
}
