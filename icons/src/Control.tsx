import type { SVGProps } from 'react';
export default function SvgControl(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 48 48"
            {...props}
        >
            <rect
                width={8}
                height={8}
                x={10}
                y={13}
                fill="currentColor"
                stroke="currentColor"
                strokeWidth={2}
                rx={4}
            />
            <rect
                width={8}
                height={8}
                x={30}
                y={13}
                fill="currentColor"
                stroke="currentColor"
                strokeWidth={2}
                rx={4}
            />
            <rect
                width={8}
                height={8}
                x={1}
                y={-1}
                fill="currentColor"
                stroke="currentColor"
                strokeWidth={2}
                rx={4}
                transform="matrix(1 0 0 -1 19 33)"
            />
            <rect width={2} height={5} x={13} y={8} fill="currentColor" rx={1} />
            <rect width={2} height={5} x={33} y={8} fill="currentColor" rx={1} />
            <rect
                width={2}
                height={5}
                fill="currentColor"
                rx={1}
                transform="matrix(1 0 0 -1 23 39)"
            />
            <rect width={2} height={18} x={13} y={21} fill="currentColor" rx={1} />
            <rect width={2} height={18} x={33} y={21} fill="currentColor" rx={1} />
            <rect
                width={2}
                height={18}
                fill="currentColor"
                rx={1}
                transform="matrix(1 0 0 -1 23 26)"
            />
        </svg>
    );
}
