import type { SVGProps } from 'react';
export default function SvgThroughput(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 48 48"
            {...props}
        >
            <rect width={8} height={8} x={34} y={14} fill="currentColor" rx={4} />
            <rect width={8} height={8} x={6} y={14} fill="currentColor" rx={4} />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M18 10a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4zm2 20a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4-16a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
                clipRule="evenodd"
            />
            <rect width={8} height={8} x={34} y={26} fill="currentColor" rx={4} />
            <rect width={8} height={8} x={6} y={26} fill="currentColor" rx={4} />
            <path
                stroke="currentColor"
                strokeWidth={1.5}
                d="M9 18h9.152m11.187 0h7.627m-26.95 12h8.136m11.187 0H39"
            />
        </svg>
    );
}
