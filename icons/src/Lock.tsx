import type { SVGProps } from 'react';
export default function SvgLock(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 48 48"
            {...props}
        >
            <path stroke="currentColor" strokeWidth={3} d="M16 35V16a8 8 0 1 1 16 0v2" />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M14 22a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V26a4 4 0 0 0-4-4zm10.2 12.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4"
                clipRule="evenodd"
            />
        </svg>
    );
}
