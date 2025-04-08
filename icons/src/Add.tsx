import type { SVGProps } from 'react';
export default function SvgAdd(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g>
                <path
                    d="M13 5.25C13 4.69772 12.5523 4.25 12 4.25C11.4477 4.25 11 4.69772 11 5.25V11.25H5C4.44771 11.25 4 11.6977 4 12.25C4 12.8023 4.44771 13.25 5 13.25H11V19.25C11 19.8023 11.4477 20.25 12 20.25C12.5523 20.25 13 19.8023 13 19.25V13.25H19C19.5523 13.25 20 12.8023 20 12.25C20 11.6977 19.5523 11.25 19 11.25H13V5.25Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </g>
        </svg>
    );
}
