import type { SVGProps } from 'react';
export default function SvgArrowTopRight(props: SVGProps<SVGSVGElement>) {
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
                d="M6 7a1 1 0 1 1 0-2h13v13a1 1 0 1 1-2 0V8.533l-9.879 9.88a1 1 0 0 1-1.414-1.415L15.705 7z"
                clipRule="evenodd"
            />
        </svg>
    );
}
