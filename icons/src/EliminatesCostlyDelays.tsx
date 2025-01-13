import type { SVGProps } from 'react';
export default function SvgEliminatesCostlyDelays(props: SVGProps<SVGSVGElement>) {
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
                d="M6.5 9a.5.5 0 0 0 0 1H13a.5.5 0 0 0 0-1zM6 12a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H6.5A.5.5 0 0 1 6 12M6.5 14a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM18.5 17.023a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.512V15a.5.5 0 0 1 1 0v1.523h1a.5.5 0 0 1 .5.5"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M13.035 19H5.5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v7.03q.245-.03.5-.03a4 4 0 1 1-3.465 6M5.5 5H7v1a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1V5H14a1 1 0 0 1 1 1v7.29A4 4 0 0 0 12.626 18H5.5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1M8 6V5h3.5v1zm11.5 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
                clipRule="evenodd"
            />
        </svg>
    );
}
