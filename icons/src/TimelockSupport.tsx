import type { SVGProps } from 'react';
export default function SvgTimelockSupport(props: SVGProps<SVGSVGElement>) {
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
                d="M14.008 17.054a.5.5 0 1 0 .664-.748l-1.314-1.168a1.5 1.5 0 0 0-.858-2.053V10.5a.5.5 0 0 0-1 0v2.585a1.5 1.5 0 1 0 1.154 2.765zM12 14a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1"
                clipRule="evenodd"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M18.5 14.5a6.5 6.5 0 0 0-3-5.478V6.5a3.5 3.5 0 1 0-7 0v2.522a6.5 6.5 0 1 0 10 5.478M12 8a6.5 6.5 0 0 0-2.5.498V6.5a2.5 2.5 0 0 1 5 0v1.998A6.5 6.5 0 0 0 12 8m-5.5 6.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0"
                clipRule="evenodd"
            />
        </svg>
    );
}
