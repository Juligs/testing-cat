import type { SVGProps } from 'react';
export default function SvgMarketValue(props: SVGProps<SVGSVGElement>) {
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
                fill="currentColor"
                stroke="currentColor"
                strokeWidth={2}
                d="M42 24a18 18 0 0 0-9-15.588L24 24z"
            />
            <path stroke="currentColor" strokeWidth={2} d="M31.5 11.01A15 15 0 1 0 39 24H24z" />
        </svg>
    );
}
