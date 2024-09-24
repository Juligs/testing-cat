import type { SVGProps } from 'react';
export default function SvgInterview(props: SVGProps<SVGSVGElement>) {
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
                width={26}
                height={34}
                x={41}
                y={11}
                stroke="currentColor"
                strokeWidth={2}
                rx={3}
                transform="rotate(90 41 11)"
            />
            <path
                fill="currentColor"
                d="M29 33c1.105 0 2.027-.913 1.716-1.973a7 7 0 0 0-9.395-4.494 7 7 0 0 0-4.037 4.494C16.973 32.087 17.895 33 19 33z"
            />
            <circle cx={24} cy={20} r={4} fill="currentColor" />
        </svg>
    );
}
