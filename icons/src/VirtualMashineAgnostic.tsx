import type { SVGProps } from 'react';
export default function SvgVirtualMashineAgnostic(props: SVGProps<SVGSVGElement>) {
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
                d="M24 12v11.945m0 0L35 31m-11-7.055L13 31m.111 4.072 6.466 3.747a8.87 8.87 0 0 0 8.846 0l6.466-3.747M9 28.095v-8.19c0-2.853 1.559-5.499 4.111-6.978l6.466-3.746M39 28.095v-8.19c0-2.853-1.559-5.499-4.11-6.978l-6.467-3.746"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                strokeWidth={2}
                d="M13 33a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM28 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm15 25a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
            />
        </svg>
    );
}
