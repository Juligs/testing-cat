import type { SVGProps } from 'react';
export default function SvgVolumeVelocity(props: SVGProps<SVGSVGElement>) {
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
                d="M43 27a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3z"
            />
            <path
                stroke="currentColor"
                strokeWidth={2}
                d="M15 25a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM26 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm0 32a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm7-15H15m20-5L25 10m9 19-9 9"
            />
        </svg>
    );
}
