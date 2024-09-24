import type { SVGProps } from 'react';
export default function SvgAccessRights(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 48 48"
            {...props}
        >
            <path stroke="currentColor" strokeWidth={3} d="M16 35V16a8 8 0 1 1 16 0v2" />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M14 22a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V26a4 4 0 0 0-4-4zm8.636 11.942q.104.102.238.128a.47.47 0 0 0 .443-.123l5.519-5.52a.467.467 0 0 0 0-.66l-.63-.63a.467.467 0 0 0-.66 0l-4.567 4.566-2.552-2.55a.467.467 0 0 0-.66 0l-.63.63a.467.467 0 0 0 0 .66z"
                clipRule="evenodd"
            />
        </svg>
    );
}
