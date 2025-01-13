import type { SVGProps } from 'react';
export default function SvgClientLibraries(props: SVGProps<SVGSVGElement>) {
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
                d="M13.582 8.519a.5.5 0 0 1 .347.616l-1.105 3.942a.5.5 0 0 1-.963-.27l1.105-3.942a.5.5 0 0 1 .616-.346M11.208 9.341a.5.5 0 0 0-.731-.682l-1.842 1.97a.5.5 0 0 0 0 .683l1.842 1.971a.5.5 0 1 0 .73-.682l-1.523-1.63zM14.582 9.341a.5.5 0 1 1 .73-.682l1.843 1.97a.5.5 0 0 1 0 .683l-1.842 1.971a.5.5 0 1 1-.73-.682l1.522-1.63z"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v12a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 18.5zm1 12a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0-.5.5m12-1.415V6.5A1.5 1.5 0 0 0 16.5 5H8v12h9.5q.264.001.5.085M7 17h-.5q-.264.001-.5.085V6.5a1.5 1.5 0 0 1 1-1.415z"
                clipRule="evenodd"
            />
        </svg>
    );
}
