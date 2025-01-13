import type { SVGProps } from 'react';
export default function SvgMigrationSupport(props: SVGProps<SVGSVGElement>) {
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
                d="M13 7h-3V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2v3a1.5 1.5 0 0 0 1.5 1.5h2V18a2 2 0 0 0 2 2H18a2 2 0 0 0 2-2v-5.5a2 2 0 0 0-2-2h-3.5v-2A1.5 1.5 0 0 0 13 7M5 5h4v2h-.5A1.5 1.5 0 0 0 7 8.5V9H5zm8.5 5.5v-2A.5.5 0 0 0 13 8H8.5a.5.5 0 0 0-.5.5V13a.5.5 0 0 0 .5.5h2v-1a2 2 0 0 1 2-2zm-1 1H18a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1h-5.5a1 1 0 0 1-1-1v-5.5a1 1 0 0 1 1-1"
                clipRule="evenodd"
            />
        </svg>
    );
}
