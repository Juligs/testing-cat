import type { SVGProps } from 'react';
export default function SvgMultiTierControl(props: SVGProps<SVGSVGElement>) {
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
                d="M5 4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6.5v1.5h-3A1.5 1.5 0 0 0 7 13v1H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H8v-1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2v-1a1.5 1.5 0 0 0-1.5-1.5h-3V10H19a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm14 1H5v4h14zm-5 10v4h5v-4zm-4 0v4H5v-4z"
                clipRule="evenodd"
            />
        </svg>
    );
}
