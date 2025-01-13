import type { SVGProps } from 'react';
export default function SvgDaos(props: SVGProps<SVGSVGElement>) {
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
                d="M14.5 7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-1 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M8.5 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M17.5 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2M8 13a5 5 0 0 1 4-2c1.636 0 3.088.785 4 2a2.5 2.5 0 0 1 4 2v3.872c0 .07-.057.128-.128.128H4.127A.127.127 0 0 1 4 18.872V15a2.5 2.5 0 0 1 4-2m8 3v2H8v-2a4 4 0 0 1 8 0m-8.522-2.137A5 5 0 0 0 7 16v2H5v-3a1.5 1.5 0 0 1 2.478-1.137M17 16a5 5 0 0 0-.478-2.137A1.5 1.5 0 0 1 19 15v3h-2z"
                clipRule="evenodd"
            />
        </svg>
    );
}
