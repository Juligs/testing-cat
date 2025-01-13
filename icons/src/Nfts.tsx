import type { SVGProps } from 'react';
export default function SvgNfts(props: SVGProps<SVGSVGElement>) {
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
                d="M14.015 9.773v.824h1.447V14.5h.988v-3.903h1.448v-.824zM10.523 14.5V9.773h3.13v.824h-2.13v1.126h1.922v.824h-1.923V14.5zM9.827 14.5V9.773h-.995v2.973h-.041L6.75 9.773h-.878V14.5h1v-2.975h.034L8.964 14.5z"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M10.794 3.578a2 2 0 0 1 2 0l5.794 3.345a2 2 0 0 1 1 1.732v6.69a2 2 0 0 1-1 1.733l-5.794 3.345a2 2 0 0 1-2 0L5 17.078a2 2 0 0 1-1-1.732V8.654a2 2 0 0 1 1-1.732zm1.5.866 5.794 3.345a1 1 0 0 1 .5.866v6.69a1 1 0 0 1-.5.867l-5.794 3.345a1 1 0 0 1-1 0L5.5 16.212a1 1 0 0 1-.5-.867v-6.69a1 1 0 0 1 .5-.866l5.794-3.345a1 1 0 0 1 1 0"
                clipRule="evenodd"
            />
        </svg>
    );
}
