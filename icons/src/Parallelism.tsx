import type { SVGProps } from 'react';
export default function SvgParallelism(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 48 48"
            {...props}
        >
            <rect width={8} height={8} x={12} y={13} stroke="currentColor" strokeWidth={2} rx={3} />
            <rect width={8} height={8} x={28} y={13} stroke="currentColor" strokeWidth={2} rx={3} />
            <rect width={8} height={8} x={12} y={27} stroke="currentColor" strokeWidth={2} rx={3} />
            <rect width={8} height={8} x={28} y={27} stroke="currentColor" strokeWidth={2} rx={3} />
            <rect width={2} height={5} x={15} y={8} fill="currentColor" rx={1} />
            <rect width={2} height={5} x={31} y={8} fill="currentColor" rx={1} />
            <rect width={2} height={6} x={15} y={21} fill="currentColor" rx={1} />
            <rect width={2} height={6} x={31} y={21} fill="currentColor" rx={1} />
            <rect width={2} height={6} x={15} y={34} fill="currentColor" rx={1} />
            <rect width={2} height={6} x={31} y={34} fill="currentColor" rx={1} />
        </svg>
    );
}
