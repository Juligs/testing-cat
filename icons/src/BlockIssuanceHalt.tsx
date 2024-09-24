import type { SVGProps } from 'react';
export default function SvgBlockIssuanceHalt(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 48 48"
            {...props}
        >
            <rect
                width={20}
                height={20}
                x={9}
                y={18}
                stroke="currentColor"
                strokeWidth={2}
                rx={2}
            />
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={2}
                d="m10 18 11-9m7 29 12-10M29 18l10-8M10 37l10-8"
            />
            <rect
                width={20}
                height={20}
                x={20}
                y={9}
                stroke="currentColor"
                strokeWidth={2}
                rx={2}
            />
        </svg>
    );
}
