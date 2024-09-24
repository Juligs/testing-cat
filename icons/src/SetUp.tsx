import type { SVGProps } from 'react';
export default function SvgSetUp(props: SVGProps<SVGSVGElement>) {
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
                width={34}
                height={20}
                x={7}
                y={14}
                stroke="currentColor"
                strokeWidth={2}
                rx={10}
            />
            <circle cx={30} cy={24} r={7} fill="currentColor" />
        </svg>
    );
}
