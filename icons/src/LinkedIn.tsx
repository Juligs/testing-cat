import type { SVGProps } from 'react';
export default function SvgLinkedIn(props: SVGProps<SVGSVGElement>) {
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
                d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2m-3.171-2.5H18.5v-5.487c0-2.322-1.316-3.444-3.154-3.444-1.84 0-2.613 1.432-2.613 1.432V9.833h-2.575V18.5h2.575v-4.55c0-1.218.56-1.944 1.635-1.944.987 0 1.46.697 1.46 1.944zM5.5 7.1c0 .882.71 1.598 1.587 1.598S8.674 7.982 8.674 7.1 7.964 5.5 7.087 5.5c-.876 0-1.587.716-1.587 1.6m2.942 11.4H5.758V9.833h2.684z"
                clipRule="evenodd"
            />
        </svg>
    );
}
