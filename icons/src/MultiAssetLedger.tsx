import type { SVGProps } from 'react';
export default function SvgMultiAssetLedger(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 48 48"
            {...props}
        >
            <path
                stroke="currentColor"
                strokeWidth={1.5}
                d="M16.187 4.945a1.25 1.25 0 0 1 1.768 0l16.263 16.263a3.25 3.25 0 0 1 0 4.596l-1.414 1.414a3.25 3.25 0 0 1-4.596 0L11.944 10.955a1.25 1.25 0 0 1 0-1.768z"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M11.414 35.527a2 2 0 0 0 0 2.828l4.243 4.243a2 2 0 0 0 2.828 0L34.75 26.334a4 4 0 0 0 0-5.656l-1.415-1.415a4 4 0 0 0-5.656 0zM31 25a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                clipRule="evenodd"
            />
        </svg>
    );
}
