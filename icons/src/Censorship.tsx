import type { SVGProps } from 'react';
export default function SvgCensorship(props: SVGProps<SVGSVGElement>) {
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
                strokeWidth={2}
                d="M12 8h-1a5 5 0 0 0-5 5v22a5 5 0 0 0 5 5h16.5l7.5 5.5V40h2a5 5 0 0 0 5-5V13a5 5 0 0 0-5-5h-2"
            />
            <path stroke="currentColor" strokeWidth={3} d="M17 30V11a7 7 0 1 1 14 0v2.63" />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M16 16a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V20a4 4 0 0 0-4-4zm8.2 12.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4"
                clipRule="evenodd"
            />
        </svg>
    );
}
