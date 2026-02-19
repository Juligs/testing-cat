import { useTooltipPosition } from '@visx/tooltip';
import clsx from 'clsx';

export function GraphTooltipContainer({ children }: React.PropsWithChildren): JSX.Element {
    const { isFlippedHorizontally } = useTooltipPosition();
    return (
        <div
            className={clsx(
                'w-fit -translate-y-[calc(100%-10px)] rounded-md border border-solid p-2 border-iota-neutral-80 bg-iota-neutral-100',
                isFlippedHorizontally
                    ? '-translate-x-[1px] rounded-bl-none'
                    : 'translate-x-[1px] rounded-br-none',
            )}
        >
            {children}
        </div>
    );
}

interface GraphTooltipContentProps {
    value: string;
    label: string;
    date: string;
}
export function GraphTooltipContent({ value, label, date }: GraphTooltipContentProps) {
    return (
        <div className="flex flex-col gap-1">
            <span className="text-label-sm text-iota-neutral-60">{date}</span>
            <span className="text-title-sm text-iota-neutral-10">{value}</span>
            <span className="text-label-sm text-iota-neutral-60 ">{label}</span>
        </div>
    );
}
