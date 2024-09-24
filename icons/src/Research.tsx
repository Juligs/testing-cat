import type { SVGProps } from 'react';
export default function SvgResearch(props: SVGProps<SVGSVGElement>) {
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
                d="M29 11h6a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2H13a2 2 0 0 1-2-2v-5"
            />
            <circle cx={19} cy={19} r={8} stroke="currentColor" strokeWidth={2} />
            <path stroke="currentColor" strokeWidth={2} d="m25 24.5 6.5 6.5" />
        </svg>
    );
}
