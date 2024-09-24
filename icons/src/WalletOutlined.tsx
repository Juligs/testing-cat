import type { SVGProps } from 'react';
export default function SvgWalletOutlined(props: SVGProps<SVGSVGElement>) {
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
                d="M15.466 13a.23.23 0 0 1-.228-.228.91.91 0 0 1 .762-.899l16.836-3.679A1 1 0 0 1 34 9.18V12a1 1 0 0 1-1 1z"
            />
            <path
                stroke="currentColor"
                strokeWidth={2}
                d="M10 19a3 3 0 0 1 3-3h24a3 3 0 0 1 3 3v2a1 1 0 0 1-1 1h-9a5 5 0 0 0 0 10h9a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3zm21 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            />
            <path stroke="currentColor" d="M39.5 20.5h1v14h-1z" />
        </svg>
    );
}
