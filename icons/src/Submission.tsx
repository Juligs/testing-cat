import type { SVGProps } from 'react';
export default function SvgSubmission(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 48 48"
            {...props}
        >
            <circle cx={24} cy={24} r={16} stroke="currentColor" strokeWidth={2} />
            <path stroke="currentColor" strokeWidth={2} d="M24 32V16m0 0-7 7.04M24 16l7 7.04" />
        </svg>
    );
}
