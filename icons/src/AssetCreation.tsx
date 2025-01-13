import type { SVGProps } from 'react';
export default function SvgAssetCreation(props: SVGProps<SVGSVGElement>) {
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
                d="M8 4.5a.5.5 0 0 0-.5-.5h-2A1.5 1.5 0 0 0 4 5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 0 .5-.5"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-6 0a.5.5 0 0 1 .5-.5h1v-1a.5.5 0 0 1 1 0v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1-.5-.5"
                clipRule="evenodd"
            />
            <path
                fill="currentColor"
                d="M7.5 20a.5.5 0 0 0 0-1h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 5.5 20zM4.5 10a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5M13.5 5a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1zM14 19.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5M16.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 18.5 4zM16 19.5a.5.5 0 0 0 .5.5h2a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0-.5.5M19 10.5a.5.5 0 0 1 1 0v3a.5.5 0 0 1-1 0z"
            />
        </svg>
    );
}
