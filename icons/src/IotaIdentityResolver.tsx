import type { SVGProps } from 'react';
export default function SvgIotaIdentityResolver(props: SVGProps<SVGSVGElement>) {
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
                d="M11.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m0-1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M10.5 12a5 5 0 0 0-5 5v1a1 1 0 0 0 1 1h8.535a4 4 0 1 0 1.215-5.307A4.99 4.99 0 0 0 12.5 12zm5 2.354a4 4 0 0 0-3-1.354h-2a4 4 0 0 0-4 4v1h8.126a4.01 4.01 0 0 1 .874-3.646m4.98 1.158a.5.5 0 0 1 .11.698l-1.5 2.065a1 1 0 0 1-1.455.176l-.771-.653a.5.5 0 0 1 .645-.763l.771.652 1.502-2.065a.5.5 0 0 1 .699-.11"
                clipRule="evenodd"
            />
        </svg>
    );
}
