import type { SVGProps } from 'react';
export default function SvgLineArrowSmall(props: SVGProps<SVGSVGElement>) {
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
                fillRule="evenodd"
                d="M11.335 4.122a1 1 0 0 1 1.414-1.415l9.193 9.193-9.193 9.192a1 1 0 1 1-1.414-1.414l6.694-6.694H4.06a1 1 0 0 1 0-2h14.138z"
                clipRule="evenodd"
            />
        </svg>
    );
}
