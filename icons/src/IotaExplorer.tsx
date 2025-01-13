import type { SVGProps } from 'react';
export default function SvgIotaExplorer(props: SVGProps<SVGSVGElement>) {
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
                d="M6.75 7a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M10 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M14.139 12.82c0 .644-.216 1.237-.58 1.712l2.295 2.295a.5.5 0 1 1-.707.707l-2.328-2.327a2.82 2.82 0 1 1 1.32-2.388m-1 0a1.82 1.82 0 1 1-3.64 0 1.82 1.82 0 0 1 3.64 0"
                clipRule="evenodd"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1h12a1 1 0 0 1 1 1v1.5H5V6a1 1 0 0 1 1-1M5 8.5V18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.5z"
                clipRule="evenodd"
            />
        </svg>
    );
}
