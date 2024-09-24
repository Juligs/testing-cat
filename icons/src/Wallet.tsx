import type { SVGProps } from 'react';
export default function SvgWallet(props: SVGProps<SVGSVGElement>) {
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
                fill="currentColor"
                d="M12.228 13a.23.23 0 0 1-.228-.228.91.91 0 0 1 .762-.899l22.074-3.679A1 1 0 0 1 36 9.18V12a1 1 0 0 1-1 1z"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M13 15a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4v-2a2 2 0 0 0-2-2h-9a4 4 0 0 1 0-8h9a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4z"
                clipRule="evenodd"
            />
            <path fill="currentColor" d="M32 27a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
        </svg>
    );
}
