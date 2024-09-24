import type { SVGProps } from 'react';
export default function SvgFeelessness(props: SVGProps<SVGSVGElement>) {
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
                fillRule="evenodd"
                d="M25.57 32.4A11.96 11.96 0 0 0 29 24c0-3.27-1.308-6.235-3.43-8.4A9.95 9.95 0 0 1 31 14c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.95 9.95 0 0 1-5.43-1.6M24 33.747A11.99 11.99 0 0 1 19 24c0-4.015 1.972-7.57 5-9.748a12 12 0 0 1 1.57 1.349A9.99 9.99 0 0 0 21 24a9.99 9.99 0 0 0 4.57 8.4A12 12 0 0 1 24 33.747m0 0A11.95 11.95 0 0 1 17 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c2.612 0 5.03.835 7 2.252A11.95 11.95 0 0 1 31 12c6.627 0 12 5.373 12 12s-5.373 12-12 12c-2.612 0-5.03-.835-7-2.252Z"
                clipRule="evenodd"
            />
        </svg>
    );
}
