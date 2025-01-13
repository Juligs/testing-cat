import type { SVGProps } from 'react';
export default function SvgTrustSchemas(props: SVGProps<SVGSVGElement>) {
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
                d="M6 20a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2zM18 5H6a1 1 0 0 0-1 1v3h14V6a1 1 0 0 0-1-1m-9 5H5v4h4zm1 4v-4h4v4zm-1 1H5v3a1 1 0 0 0 1 1h3zm1 4v-4h4v4zm5-4v4h3a1 1 0 0 0 1-1v-3zm0-5v4h4v-4z"
                clipRule="evenodd"
            />
        </svg>
    );
}
