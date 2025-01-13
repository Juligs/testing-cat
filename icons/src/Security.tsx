import type { SVGProps } from 'react';
export default function SvgSecurity(props: SVGProps<SVGSVGElement>) {
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
                d="M10.5 14a1.5 1.5 0 1 1 2 1.415v1.335a.5.5 0 0 1-1 0v-1.335a1.5 1.5 0 0 1-1-1.415"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M9 10V7a3 3 0 1 1 6 0v3h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2zm5-3v3h-4V7a2 2 0 1 1 4 0m-6 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1z"
                clipRule="evenodd"
            />
        </svg>
    );
}
