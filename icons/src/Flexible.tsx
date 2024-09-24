import type { SVGProps } from 'react';
export default function SvgFlexible(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 48 48"
            {...props}
        >
            <path
                stroke="currentColor"
                strokeWidth={2}
                d="M39 24a15 15 0 1 0-30.002 0A15 15 0 0 0 39 24Z"
            />
            <circle cx={24} cy={34} r={6} fill="currentColor" />
            <path
                stroke="currentColor"
                strokeWidth={2}
                d="M34 29a10 10 0 1 0-20.001 0A10 10 0 0 0 34 29Z"
            />
        </svg>
    );
}
