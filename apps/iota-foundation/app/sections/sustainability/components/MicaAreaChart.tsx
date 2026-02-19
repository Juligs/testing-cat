import { MicaTimeSeriesPoint } from '@lib/utils';
import { AreaGraph } from './AreaGraph';
import { GraphTooltipContent } from './GraphTooltipContent';
import { ParentSize } from '@visx/responsive';
import { formatUtcDate } from '@lib/utils/formatUtcDate';

type MicaAreaChartProps = {
    data: MicaTimeSeriesPoint[];
    unit: string;
    label: string;
};
export function parseUtcDayMs(date: string): number {
    return Date.parse(`${date}T00:00:00Z`);
}

export function parseNumber(value: string): number {
    return Number(String(value).replace(/,/g, ''));
}

export function MicaAreaChart({ data, unit, label }: MicaAreaChartProps) {
    const cleanData = data.filter((d) => {
        const x = parseUtcDayMs(d.date);
        const y = parseNumber(d.formatted_value);
        return Number.isFinite(x) && Number.isFinite(y);
    });
    return (
        <div className="relative h-full w-full">
            <ParentSize>
                {({ width, height }) => (
                    <AreaGraph<MicaTimeSeriesPoint>
                        data={cleanData}
                        width={width}
                        height={height}
                        getX={(d) => parseUtcDayMs(d.date)}
                        getY={(d) => parseNumber(d.formatted_value)}
                        tooltipContent={({ data }) => (
                            <GraphTooltipContent
                                value={`${data.formatted_value} ${unit}`}
                                date={formatUtcDate(data.date)}
                                label={label}
                            />
                        )}
                    />
                )}
            </ParentSize>
        </div>
    );
}
