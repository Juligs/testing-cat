import type { SVGProps } from 'react';
export default function SvgIotaIdentityExplorer(props: SVGProps<SVGSVGElement>) {
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
                d="M15 7.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
                clipRule="evenodd"
            />
            <path fill="currentColor" d="M18.25 17a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M6.5 19h8.877a4 4 0 1 0 .594-5.6A4.98 4.98 0 0 0 12.5 12h-2a5 5 0 0 0-5 5v1a1 1 0 0 0 1 1m6-6h-2a4 4 0 0 0-4 4v1h8.29a4 4 0 0 1-.29-1.5c0-.89.29-1.71.781-2.375A3.99 3.99 0 0 0 12.5 13m5.75 5c.301 0 .585-.076.832-.21l.564.564a.5.5 0 1 0 .707-.707l-.563-.564a1.75 1.75 0 1 0-1.54.917"
                clipRule="evenodd"
            />
        </svg>
    );
}
