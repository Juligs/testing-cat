import type { SVGProps } from 'react';
export default function SvgSmartContract(props: SVGProps<SVGSVGElement>) {
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
                d="M9.75 8a.5.5 0 0 0 0 1h6.5a.5.5 0 1 0 0-1zM9.25 11a.5.5 0 0 1 .5-.5h6.5a.5.5 0 1 1 0 1h-6.5a.5.5 0 0 1-.5-.5M9.75 13a.5.5 0 0 0 0 1h6.5a.5.5 0 1 0 0-1z"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M6.75 5a2 2 0 0 1 2-2h7.072a2 2 0 0 1 1.409.58L18.659 5a2 2 0 0 1 .591 1.419V16a2 2 0 0 1-2 2h-8.5a2 2 0 0 1-2-2zm10.5 12h-8.5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7v2.5h2.5V16a1 1 0 0 1-1 1"
                clipRule="evenodd"
            />
            <path
                fill="currentColor"
                d="M5.75 6a.5.5 0 0 0-1 0v10.5a3.5 3.5 0 0 0 3.5 3.5h8a.5.5 0 0 0 0-1h-8a2.5 2.5 0 0 1-2.5-2.5z"
            />
        </svg>
    );
}
