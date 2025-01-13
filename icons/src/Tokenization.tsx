import type { SVGProps } from 'react';
export default function SvgTokenization(props: SVGProps<SVGSVGElement>) {
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
                d="M8 10.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5M12 6.5c-1.695 0-3.17.937-3.937 2.32a.5.5 0 0 0 .874.485A3.5 3.5 0 0 1 15.5 11v4a.5.5 0 1 0 1 0v-4A4.5 4.5 0 0 0 12 6.5"
            />
            <path
                fill="currentColor"
                d="M14 13.5a.5.5 0 0 1 .5.5v2.5a.5.5 0 0 1-1 0V14a.5.5 0 0 1 .5-.5M12 8.5A2.5 2.5 0 0 0 9.5 11v5.5a.5.5 0 0 0 1 0V11a1.5 1.5 0 0 1 3 0v1a.5.5 0 0 0 1 0v-1A2.5 2.5 0 0 0 12 8.5"
            />
            <path
                fill="currentColor"
                d="M12 10.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5M12.5 16a.5.5 0 0 0-1 0v.5a.5.5 0 0 0 1 0z"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17m0-1a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15"
                clipRule="evenodd"
            />
        </svg>
    );
}
