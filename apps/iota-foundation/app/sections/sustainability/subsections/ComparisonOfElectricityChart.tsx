'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { BREAKPOINTS_CHART, COMPARISON_ELECTRICITY_DATA, ICON_GAP, ICON_SIZE } from '../constants';
import { useTooltip } from 'hooks/useTooltip';
import { EnergyTooltip } from '../components/EnergyTooltip';
import { getLabelLines } from './getLabelLines';

export type EnergyItem = {
    label: string;
    value: number;
    unit: 'kWh';
    source_name: string;
    source_link: string;
};

export function EnergyComparisonChart() {
    const [hoveredItem, setHoveredItem] = useState<EnergyItem | null>(null);
    const [selectedItem, setSelectedItem] = useState<EnergyItem | null>(null);

    const containerRef = useRef<HTMLDivElement | null>(null);
    const valueTextRefs = useRef<Record<number, SVGTextElement | null>>({});

    const [containerWidth, setContainerWidth] = useState(0);

    const isTablet = containerWidth > 0 && containerWidth < BREAKPOINTS_CHART.tablet;

    const showInfoIcon = isTablet;

    const [textReady, setTextReady] = useState(false);

    const chartContainerWidth = containerWidth || 1200;

    // this is a hardcoded value that needs to be increased
    // if the max value in the chart is bigger than 7 chars
    const rightLegendReservedWidth = isTablet ? ICON_GAP + ICON_SIZE + 70 : 70;
    const spaceBetweenLabelAndBar = 10;
    const leftLegendWidthRatio = isTablet ? 0.42 : 0.28;
    const maxLeftLegentWidth = isTablet ? 200 : 400;
    const barHeight = isTablet ? 36 : 25;
    const barSpacing = isTablet ? 67 : 50;

    const barStartPositionX = Math.min(
        chartContainerWidth * leftLegendWidthRatio,
        maxLeftLegentWidth,
    );

    const chartWidth =
        chartContainerWidth -
        barStartPositionX -
        rightLegendReservedWidth -
        spaceBetweenLabelAndBar;
    const maxValue = Math.max(...COMPARISON_ELECTRICITY_DATA.map((d) => d.value));

    function getBarWidth(value: number) {
        let ratio = value / maxValue;
        // we have to adjust the ratio a bit and use a power function to make the differences more visible, especially for small values
        const adjustmentFavorForVisibility = 1 / 3;
        ratio = Math.pow(ratio, adjustmentFavorForVisibility);
        return ratio * chartWidth;
    }

    function formatValue(value: number, unit: string) {
        const adjustedValue = value >= 1 ? value.toFixed(1) : value;
        return `${adjustedValue} ${unit}`;
    }

    const activeItem = selectedItem ?? hoveredItem;
    const { tooltipRef, style: tooltipStyle, setFromEvent, setFromSvg } = useTooltip(containerRef);

    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new ResizeObserver(([entry]) => {
            setContainerWidth(entry?.contentRect.width ?? 0);
        });

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    useLayoutEffect(() => {
        if (!showInfoIcon) return;

        const hasAllTexts = COMPARISON_ELECTRICITY_DATA.every((_, i) => valueTextRefs.current[i]);

        if (hasAllTexts) {
            setTextReady(true);
        }
    }, [showInfoIcon, containerWidth]);

    return (
        <div ref={containerRef} className="w-full max-w-full overflow-hidden relative">
            {containerWidth > 0 && (
                <>
                    <svg
                        viewBox={`0 0 ${chartContainerWidth} ${
                            COMPARISON_ELECTRICITY_DATA.length * barSpacing + 40
                        }`}
                        className="w-full h-auto"
                        role="img"
                        aria-label="Energy comparison chart"
                        preserveAspectRatio="xMinYMin meet"
                        onMouseMove={(e) => {
                            if (selectedItem) return;
                            setFromEvent(e);
                        }}
                        onClick={(e) => {
                            if (e.target === e.currentTarget) {
                                setSelectedItem(null);
                                setHoveredItem(null);
                            }
                        }}
                    >
                        {/* Bars */}
                        {COMPARISON_ELECTRICITY_DATA.map((item, index) => {
                            const labelLines = getLabelLines(item.label, isTablet);

                            const barY = index * barSpacing;
                            const separatorY = barY + barHeight + (barSpacing - barHeight) / 2;

                            const valueTextEl = valueTextRefs.current[index];

                            const separatorStartX = valueTextEl
                                ? valueTextEl.getBBox().x +
                                  valueTextEl.getBBox().width +
                                  (isTablet ? ICON_GAP + ICON_SIZE : 0)
                                : 0;

                            return (
                                <g key={item.label}>
                                    <text
                                        x={barStartPositionX - spaceBetweenLabelAndBar}
                                        y={barY}
                                        textAnchor="end"
                                        fill="#374151"
                                        className="text-label-sm text-medium"
                                    >
                                        {labelLines.map((line, i) => (
                                            <tspan
                                                key={i}
                                                x={barStartPositionX - spaceBetweenLabelAndBar}
                                                dy={i === 0 ? '1.1em' : '1.2em'}
                                            >
                                                {line}
                                            </tspan>
                                        ))}
                                    </text>

                                    {/* Bar */}
                                    <rect
                                        x={barStartPositionX}
                                        y={barY}
                                        width={getBarWidth(item.value)}
                                        height={barHeight}
                                        rx={2}
                                        fill={
                                            selectedItem?.label === item.label
                                                ? '#04A8D7'
                                                : '#82E3FF'
                                        }
                                        className="cursor-pointer"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setFromEvent(e);
                                            setSelectedItem(item);
                                            setHoveredItem(item);
                                        }}
                                        onMouseEnter={() => {
                                            setHoveredItem(item);
                                        }}
                                        onMouseLeave={() => {
                                            if (selectedItem?.label !== item.label) {
                                                setHoveredItem(null);
                                            }
                                        }}
                                    />

                                    {/* Value */}
                                    <g>
                                        <text
                                            ref={(el) => {
                                                valueTextRefs.current[index] = el;
                                            }}
                                            x={
                                                barStartPositionX +
                                                Math.min(getBarWidth(item.value), chartWidth) +
                                                spaceBetweenLabelAndBar
                                            }
                                            y={barY + barHeight / 2 + 4}
                                            fill="#3C4656"
                                            className="text-label-sm text-medium"
                                        >
                                            {formatValue(item.value, item.unit)}
                                        </text>

                                        {showInfoIcon && textReady && (
                                            <svg
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setFromSvg(e.currentTarget as SVGSVGElement);
                                                    setSelectedItem(item);
                                                    setHoveredItem(item);
                                                }}
                                                x={
                                                    valueTextRefs.current[index]!.getBBox().x +
                                                    valueTextRefs.current[index]!.getBBox().width +
                                                    ICON_GAP
                                                }
                                                y={barY + barHeight / 2 - ICON_SIZE / 2}
                                                width={ICON_SIZE}
                                                height={ICON_SIZE}
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                pointerEvents="all"
                                                style={{ cursor: 'pointer' }}
                                            >
                                                <path
                                                    d="M7.86633 15.0217C11.816 15.0217 15.0178 11.8199 15.0178 7.87024C15.0178 3.92058 11.816 0.71875 7.86633 0.71875C3.91667 0.71875 0.714844 3.92058 0.714844 7.87024C0.714844 11.8199 3.91667 15.0217 7.86633 15.0217Z"
                                                    stroke="#717A8A"
                                                    strokeWidth="1.4303"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M7.86621 10.729V7.86841M7.86621 5.00781H7.87336"
                                                    stroke="#717A8A"
                                                    strokeWidth="1.4303"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        )}
                                    </g>

                                    {/* Separator */}
                                    <line
                                        x1={separatorStartX}
                                        x2={0}
                                        y1={separatorY}
                                        y2={separatorY}
                                        stroke="#00000014"
                                        strokeWidth={1}
                                        shapeRendering="crispEdges"
                                    />
                                </g>
                            );
                        })}
                    </svg>

                    {activeItem && (
                        <EnergyTooltip
                            item={activeItem}
                            tooltipRef={tooltipRef}
                            style={tooltipStyle}
                        />
                    )}
                </>
            )}
        </div>
    );
}
