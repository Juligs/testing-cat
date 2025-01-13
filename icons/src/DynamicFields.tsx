import type { SVGProps } from 'react';
export default function SvgDynamicFields(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                fill="currentColor"
                d="M5.5 7a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M10 6.5a.5.5 0 0 0 0 1h6.5a.5.5 0 0 0 0-1z"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M6.5 4a3 3 0 0 0 0 6h10a3 3 0 1 0 0-6zm10 1h-10a2 2 0 1 0 0 4h10a2 2 0 1 0 0-4"
                clipRule="evenodd"
            />
            <path
                fill="currentColor"
                d="M5.5 14a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M10 13.5a.5.5 0 0 0 0 1h1.5a.5.5 0 0 0 0-1z"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M20.5 16.5a4 4 0 0 1-7.97.5H6.5a3 3 0 1 1 0-6h10a3 3 0 0 1 2.996 2.85A3.99 3.99 0 0 1 20.5 16.5m-7.97-.5a4 4 0 0 1 5.606-3.152A2 2 0 0 0 16.5 12h-10a2 2 0 1 0 0 4zm1.97.5a.5.5 0 0 1 .5-.5h1v-1a.5.5 0 0 1 1 0v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1-.5-.5"
                clipRule="evenodd"
            />
        </svg>
    );
}
