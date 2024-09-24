import type { SVGProps } from 'react';
export default function SvgCollaborative(props: SVGProps<SVGSVGElement>) {
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
                d="M29 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0m0 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0m7-7a5 5 0 1 1 0-10 5 5 0 0 1 0 10m-24 0a5 5 0 1 1 0-10 5 5 0 0 1 0 10m28-17a3 3 0 1 1-6 0 3 3 0 0 1 6 0m0 24a3 3 0 1 1-6 0 3 3 0 0 1 6 0M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0m0 24a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
            />
        </svg>
    );
}
