import type { SVGProps } from 'react';
export default function SvgPrototypes(props: SVGProps<SVGSVGElement>) {
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
                d="M6.5 7a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5zm1 .809L10.882 9.5 7.5 11.191zm7.382 3.691L12 10.059 9.118 11.5zm-1.764-2 3.382 1.691V7.809zm1.764-2H9.118L12 8.941z"
                clipRule="evenodd"
            />
            <path
                fill="currentColor"
                d="M6.5 14.5A.5.5 0 0 1 7 14h10a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5M7 16.5a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1z"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1"
                clipRule="evenodd"
            />
        </svg>
    );
}
