import type { SVGProps } from 'react';
export default function SvgInteroperable(props: SVGProps<SVGSVGElement>) {
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
                d="M29 19a11 11 0 1 0-22 0 11 11 0 0 0 22 0Z"
            />
            <path
                stroke="currentColor"
                strokeWidth={2}
                d="M41 19a11 11 0 1 0-22 0 11 11 0 0 0 22 0Z"
            />
            <path
                stroke="currentColor"
                strokeWidth={2}
                d="M35 29a11 11 0 1 0-22 0 11 11 0 0 0 22 0Z"
            />
        </svg>
    );
}
