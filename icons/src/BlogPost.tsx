import type { SVGProps } from 'react';
export default function SvgBlogPost(props: SVGProps<SVGSVGElement>) {
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
                d="M18 5H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M6 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
                clipRule="evenodd"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M7.5 7.5v4h4v-4zm-.5-1a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5zM6.5 14.5A.5.5 0 0 1 7 14h10a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5M13.5 9.5A.5.5 0 0 1 14 9h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M13.5 7a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M6.5 17a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5"
                clipRule="evenodd"
            />
        </svg>
    );
}
