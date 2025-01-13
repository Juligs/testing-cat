import type { SVGProps } from 'react';
export default function SvgMenuColapsed(props: SVGProps<SVGSVGElement>) {
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
                d="M5 8a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2zM9 14a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z"
            />
        </svg>
    );
}
