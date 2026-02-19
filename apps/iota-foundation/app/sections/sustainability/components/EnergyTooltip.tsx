'use client';

import Link from 'next/link';
import { EnergyItem } from '../subsections/ComparisonOfElectricityChart';

type EnergyTooltipProps = {
    item: EnergyItem;
    tooltipRef: React.RefObject<HTMLDivElement>;
    style?: React.CSSProperties;
};

export function EnergyTooltip({ item, tooltipRef, style }: EnergyTooltipProps) {
    return (
        <div
            ref={tooltipRef}
            role="tooltip"
            className="absolute bg-transparency-white-80 backdrop-blur-[32px] border border-transparency-black-32 rounded-lg py-2 px-3 max-w-[90vw] z-50 text-label-sm text-iota-neutral-50"
            style={style}
        >
            <p className="font-bold">{item.label}</p>
            <p>
                {item.value} {item.unit}
            </p>

            <div className="flex gap-1">
                <span>Source:</span>
                <span>{item.source_name}</span>
            </div>

            <Link
                href={item.source_link}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all"
            >
                {item.source_link}
            </Link>
        </div>
    );
}
