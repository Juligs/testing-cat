import type { SVGProps } from 'react';
export default function SvgMarketplace(props: SVGProps<SVGSVGElement>) {
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
                d="M7.639 24.016a1 1 0 0 1 .948-1.316h30.826a1 1 0 0 1 .948 1.316l-4.705 14.117a2 2 0 0 1-1.898 1.367H14.241a2 2 0 0 1-1.897-1.367z"
            />
            <path
                fill="currentColor"
                d="M6 21.1a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v1.8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"
            />
            <path
                stroke="currentColor"
                strokeWidth={2}
                d="M13.2 20.3h21.6l-3.144-9.433A2 2 0 0 0 29.759 9.5H18.24a2 2 0 0 0-1.897 1.367z"
            />
            <rect width={2} height={8} x={17} y={27} fill="currentColor" rx={1} />
            <rect width={2} height={8} x={23} y={27} fill="currentColor" rx={1} />
            <rect width={2} height={8} x={29} y={27} fill="currentColor" rx={1} />
        </svg>
    );
}
