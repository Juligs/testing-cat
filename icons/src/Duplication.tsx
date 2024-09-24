import type { SVGProps } from 'react';
export default function SvgDuplication(props: SVGProps<SVGSVGElement>) {
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
                d="M21 17v-1a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4m7-15v-1a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4m-8.293-12.707 10 10m-.414-10-10 10"
            />
        </svg>
    );
}
