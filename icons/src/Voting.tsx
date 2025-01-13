import type { SVGProps } from 'react';
export default function SvgVoting(props: SVGProps<SVGSVGElement>) {
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
                d="M4 9a2 2 0 0 1 2-2h2V4.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V7h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm5 .5V5h6v4.5zm-1 0V8H6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-2v1.5h1a.5.5 0 0 1 0 1H7a.5.5 0 0 1 0-1zm11 3.232A2 2 0 0 1 18 13H6a2 2 0 0 1-1-.268V18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"
                clipRule="evenodd"
            />
        </svg>
    );
}
