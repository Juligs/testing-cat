import type { SVGProps } from 'react';
export default function SvgUniversalCompatibility(props: SVGProps<SVGSVGElement>) {
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
                d="m11.6 7.424.104-1.095q.008-.08.008-.162a1.667 1.667 0 1 0-3.325.162l.104 1.095H5.5a1 1 0 0 0-1 1v2.04a2.698 2.698 0 0 1 0 5.011V18a1 1 0 0 0 1 1h2.04a2.698 2.698 0 0 1 5.01 0h2.526a1 1 0 0 0 1-1v-3.509l1.118.133q.098.012.2.012a1.667 1.667 0 1 0-.2-3.321l-1.118.133V8.424a1 1 0 0 0-1-1zM11.741 20a1.697 1.697 0 1 0-3.394 0H5.5a2 2 0 0 1-2-2v-3.333a1.697 1.697 0 0 0 0-3.394V8.424a2 2 0 0 1 2-2h1.891a2.7 2.7 0 0 1 0-.515 2.667 2.667 0 0 1 5.309.515h2.376a2 2 0 0 1 2 2v1.898a2.7 2.7 0 0 1 .637 0 2.667 2.667 0 0 1-.637 5.296V18a2 2 0 0 1-2 2z"
                clipRule="evenodd"
            />
        </svg>
    );
}
