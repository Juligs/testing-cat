import type { SVGProps } from 'react';
export default function SvgElectricity(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 40 40"
            {...props}
        >
            <path
                d="M23.333 17.5026V13.3359M16.6663 17.5026V13.3359M19.9997 36.6693C29.2047 36.6693 36.6663 29.2076 36.6663 20.0026C36.6663 10.7976 29.2047 3.33594 19.9997 3.33594C10.7947 3.33594 3.33301 10.7976 3.33301 20.0026C3.33301 29.2076 10.7947 36.6693 19.9997 36.6693Z"
                stroke="currentColor"
                strokeWidth="3.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M19.9997 26.6667C21.7678 26.6667 23.4635 25.9643 24.7137 24.714C25.964 23.4638 26.6663 21.7681 26.6663 20V17.5H13.333V20C13.333 21.7681 14.0354 23.4638 15.2856 24.714C16.5359 25.9643 18.2316 26.6667 19.9997 26.6667ZM19.9997 26.6667V36.6667"
                stroke="currentColor"
                strokeWidth="3.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
