import type { SVGProps } from 'react';
export default function SvgCollectibles(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <path fill="currentColor" d="M11.5 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M6 6.5a2 2 0 0 1 2-2h9.5a2 2 0 0 1 2 2V16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm2-1h9.5a1 1 0 0 1 1 1v6.978l-1.931-1.503a2.5 2.5 0 0 0-3.664.664L10.22 17H8a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1M11.395 17H17.5a1 1 0 0 0 1-1v-1.255l-2.545-1.98a1.5 1.5 0 0 0-2.199.398z"
                clipRule="evenodd"
            />
            <path
                fill="currentColor"
                d="M5 7.5a.5.5 0 0 0-1 0v9A3.5 3.5 0 0 0 7.5 20h9a.5.5 0 0 0 0-1h-9A2.5 2.5 0 0 1 5 16.5z"
            />
        </svg>
    );
}
