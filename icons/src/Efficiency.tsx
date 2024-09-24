import type { SVGProps } from 'react';
export default function SvgEfficiency(props: SVGProps<SVGSVGElement>) {
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
                d="M32 15a7 7 0 1 1-14 0 7 7 0 0 1 14 0m-4 18a5 5 0 1 1-10 0 5 5 0 0 1 10 0M14 15a5 5 0 1 1-10 0 5 5 0 0 1 10 0m30 18a6 6 0 1 1-12 0 6 6 0 0 1 12 0m0-18a3 3 0 1 1-6 0 3 3 0 0 1 6 0M12 33a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
            />
            <path stroke="currentColor" strokeWidth={2} d="M41 15H8m33 18H8" />
        </svg>
    );
}
