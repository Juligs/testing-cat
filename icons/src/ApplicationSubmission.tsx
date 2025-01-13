import type { SVGProps } from 'react';
export default function SvgApplicationSubmission(props: SVGProps<SVGSVGElement>) {
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
                d="M6.5 8.5a.5.5 0 0 0 0 1H13a.5.5 0 0 0 0-1zM6 12a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H6.5A.5.5 0 0 1 6 12M6.5 14.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M13.377 19H5.5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7.072a2 2 0 0 1 1.409.58L15.409 6A2 2 0 0 1 16 7.419v5.112q.245-.03.5-.031a4 4 0 1 1-3.123 6.5m-.586-1H5.5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h7v2.5H15v5.29A4 4 0 0 0 12.79 18m3.855-.354.647-.646H14.5a.5.5 0 0 1 0-1h2.793l-.647-.646a.5.5 0 0 1 .708-.708l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708-.708"
                clipRule="evenodd"
            />
        </svg>
    );
}
