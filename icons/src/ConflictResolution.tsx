import type { SVGProps } from 'react';
export default function SvgConflictResolution(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 48 48"
            {...props}
        >
            <path fill="currentColor" d="M21 23 7 31V15zm6 0 14 8V15z" />
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={2}
                d="M24 11v5m0 19v-5m-6-15 2.364 2.757m-2.364 13L20.364 28M30 15l-2.364 2.757m2.364 13L27.636 28"
            />
        </svg>
    );
}
