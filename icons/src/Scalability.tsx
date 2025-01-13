import type { SVGProps } from 'react';
export default function SvgScalability(props: SVGProps<SVGSVGElement>) {
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
                d="M10 13H6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1m-4-1a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z"
                clipRule="evenodd"
            />
            <path
                fill="currentColor"
                d="M17.334 6.628A.5.5 0 0 1 17.5 7v3a.5.5 0 0 1-1 0V8.207l-3.146 3.147a.5.5 0 0 1-.708-.708L15.793 7.5H14a.5.5 0 0 1 0-1h3c.128 0 .246.049.334.128"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M13.5 4.5A.5.5 0 0 1 14 4h3.5A2.5 2.5 0 0 1 20 6.5V10a.5.5 0 0 1-1 0V6.5A1.5 1.5 0 0 0 17.5 5H14a.5.5 0 0 1-.5-.5M13.5 19.5a.5.5 0 0 0 .5.5h3.5a2.5 2.5 0 0 0 2.5-2.5V14a.5.5 0 0 0-1 0v3.5a1.5 1.5 0 0 1-1.5 1.5H14a.5.5 0 0 0-.5.5M10.5 4.5A.5.5 0 0 0 10 4H6.5A2.5 2.5 0 0 0 4 6.5V10a.5.5 0 0 0 1 0V6.5A1.5 1.5 0 0 1 6.5 5H10a.5.5 0 0 0 .5-.5"
                clipRule="evenodd"
            />
        </svg>
    );
}
