import type { SVGProps } from 'react';
export default function SvgPlaceholder(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 48 48"
            {...props}
        >
            <path fill="currentColor" d="M24 31.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4" />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M24 41c9.389 0 17-7.611 17-17 0-3.066-.812-5.943-2.232-8.427a4.8 4.8 0 1 0-6.837-6.614A16.9 16.9 0 0 0 24 7C14.611 7 7 14.611 7 24c0 4.17 1.501 7.988 3.992 10.946a3.2 3.2 0 0 0 4.955 4.03A16.9 16.9 0 0 0 24 41m-7.219-3.848A14.93 14.93 0 0 0 24 39c8.284 0 15-6.716 15-15 0-2.75-.74-5.327-2.032-7.543a4.8 4.8 0 0 1-5.861-5.67A14.93 14.93 0 0 0 24 9C15.716 9 9 15.716 9 24c0 3.726 1.358 7.134 3.607 9.757a3.2 3.2 0 0 1 4.175 3.395Z"
                clipRule="evenodd"
            />
        </svg>
    );
}
