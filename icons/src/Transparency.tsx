import type { SVGProps } from 'react';
export default function SvgTransparency(props: SVGProps<SVGSVGElement>) {
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
                d="M16.5 4a.5.5 0 0 0 0 1h1A1.5 1.5 0 0 1 19 6.5v1a.5.5 0 0 0 1 0v-1A2.5 2.5 0 0 0 17.5 4z"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M13.5 8.5H6a2 2 0 0 0-2 2V18a2 2 0 0 0 2 2h7.5a2 2 0 0 0 2-2v-7.5a2 2 0 0 0-2-2m-5 6v-5h5a1 1 0 0 1 1 1v5h-5a1 1 0 0 1-1-1m1 2h5V18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7.5a1 1 0 0 1 1-1h1.5v5a2 2 0 0 0 2 2"
                clipRule="evenodd"
            />
            <path
                fill="currentColor"
                d="M16 16a.5.5 0 0 0 .5.5h1A2.5 2.5 0 0 0 20 14v-1a.5.5 0 0 0-1 0v1a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 0 0-.5.5M11 4a.5.5 0 0 1 0 1h-1a1.5 1.5 0 0 0-1.5 1.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 10 4z"
            />
        </svg>
    );
}
