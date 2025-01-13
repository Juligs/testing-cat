import type { SVGProps } from 'react';
export default function SvgFullControl(props: SVGProps<SVGSVGElement>) {
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
                d="M11.55 6a2.5 2.5 0 0 1 4.9 0h3.05a.5.5 0 0 1 0 1h-3.05a2.5 2.5 0 0 1-4.9 0H4.5a.5.5 0 0 1 0-1zM14 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M6.05 11.5a2.5 2.5 0 0 1 4.9 0h8.55a.5.5 0 0 1 0 1h-8.55a2.5 2.5 0 0 1-4.9 0H4.5a.5.5 0 0 1 0-1zm2.45 2a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M11.55 18H4.5a.5.5 0 0 1 0-1h7.05a2.5 2.5 0 0 1 4.9 0h3.05a.5.5 0 0 1 0 1h-3.05a2.5 2.5 0 0 1-4.9 0m.95-.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0"
                clipRule="evenodd"
            />
        </svg>
    );
}
