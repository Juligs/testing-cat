import type { SVGProps } from 'react';
export default function SvgInteroperability(props: SVGProps<SVGSVGElement>) {
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
                d="M10.5 3.901a3 3 0 1 0 0 5.197c.441.256.954.402 1.5.402s1.059-.146 1.5-.401a3 3 0 1 0 0-5.197A3 3 0 0 0 12 3.5c-.546 0-1.059.146-1.5.401M9 8.5q.352-.002.667-.114A3 3 0 0 1 9 6.5c0-.715.25-1.37.667-1.886A2 2 0 1 0 9 8.5m3.667-3.886a2 2 0 1 0 0 3.772A3 3 0 0 1 12 6.5c0-.715.25-1.37.667-1.886M15 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                clipRule="evenodd"
            />
            <path fill="currentColor" d="M16.25 15.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5" />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M5 12.5V18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5.5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2m12-1a1 1 0 0 1 1 1H6a1 1 0 0 1 1-1zM6 18v-4.5h12V18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1"
                clipRule="evenodd"
            />
        </svg>
    );
}
