import type { SVGProps } from 'react';
export default function SvgBalanceFinder(props: SVGProps<SVGSVGElement>) {
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
                d="M4.5 12A7.5 7.5 0 0 1 12 4.5a.5.5 0 0 0 0-1 8.5 8.5 0 1 0 5.265 1.827.5.5 0 1 0-.62.785A7.5 7.5 0 1 1 4.5 12"
            />
            <path
                fill="currentColor"
                d="M7 12a5 5 0 0 1 5-5 .5.5 0 0 0 0-1 6 6 0 1 0 3.71 1.285.5.5 0 1 0-.618.785A5 5 0 1 1 7 12"
            />
            <path
                fill="currentColor"
                d="M12 9.5a2.5 2.5 0 1 0 1.546.536.5.5 0 0 1 .62-.786A3.5 3.5 0 1 1 12 8.5a.5.5 0 0 1-.001 1"
            />
            <path fill="currentColor" d="M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
        </svg>
    );
}
