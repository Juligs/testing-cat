import type { SVGProps } from 'react';
export default function SvgRegulatoryCompliance(props: SVGProps<SVGSVGElement>) {
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
                d="M16.294 12.596a.5.5 0 0 1 .11.698l-1.501 2.065a1 1 0 0 1-1.455.175l-.77-.652a.5.5 0 0 1 .645-.764l.771.653 1.502-2.065a.5.5 0 0 1 .698-.11M9.5 8a.5.5 0 0 0 0 1H16a.5.5 0 1 0 0-1zM9 11a.5.5 0 0 1 .5-.5H16a.5.5 0 1 1 0 1H9.5A.5.5 0 0 1 9 11"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M17 3a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H8.5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-1.5 1H17a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H8.5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1H10v1a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1zm-1 0H11v1h3.5z"
                clipRule="evenodd"
            />
            <path
                fill="currentColor"
                d="M5.5 6a.5.5 0 0 0-1 0v10.5A3.5 3.5 0 0 0 8 20h8a.5.5 0 0 0 0-1H8a2.5 2.5 0 0 1-2.5-2.5z"
            />
        </svg>
    );
}
