import type { SVGProps } from 'react';
export default function SvgBridgless(props: SVGProps<SVGSVGElement>) {
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
                d="M41 15a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3z"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                strokeWidth={2}
                d="M17 15a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3z"
            />
            <path
                stroke="currentColor"
                strokeWidth={2}
                d="M41 37a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3zm-24 0a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3zm-6.934-7.446a15 15 0 0 1 .154-11.48m27.714 11.48a15 15 0 0 0-.154-11.48m-20.335-7.566a15 15 0 0 1 13.697.301M17.41 37.475a15 15 0 0 0 13.175.002"
            />
        </svg>
    );
}
