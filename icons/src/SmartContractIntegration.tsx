import type { SVGProps } from 'react';
export default function SvgSmartContractIntegration(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <path fill="currentColor" d="m12.75 6 2.579 3.868-2.579 1.719-2.578-1.72z" />
            <path fill="currentColor" d="m12.75 12.788 2.654-1.769L12.75 15l-2.654-3.98z" />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M6.5 5a2 2 0 0 1 2-2h7.072a2 2 0 0 1 1.409.58L18.409 5A2 2 0 0 1 19 6.419V16a2 2 0 0 1-2 2H8.5a2 2 0 0 1-2-2zM17 17H8.5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7v2.5H18V16a1 1 0 0 1-1 1"
                clipRule="evenodd"
            />
            <path
                fill="currentColor"
                d="M5.5 6a.5.5 0 0 0-1 0v10.5A3.5 3.5 0 0 0 8 20h8a.5.5 0 0 0 0-1H8a2.5 2.5 0 0 1-2.5-2.5z"
            />
        </svg>
    );
}
