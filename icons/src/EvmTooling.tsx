import type { SVGProps } from 'react';
export default function SvgEvmTooling(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <path fill="currentColor" d="m12 7.5 2.578 3.868L12 13.087l-2.578-1.72z" />
            <path fill="currentColor" d="m12 14.288 2.654-1.769L12 16.5l-2.654-3.98z" />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12.5 4.5a.5.5 0 0 0-1 0v1h-1v-1a.5.5 0 0 0-1 0v1h-2a2 2 0 0 0-2 2v2h-1a.5.5 0 0 0 0 1h1v1h-1a.5.5 0 0 0 0 1h1v1h-1a.5.5 0 0 0 0 1h1v2a2 2 0 0 0 2 2h2v1a.5.5 0 0 0 1 0v-1h1v1a.5.5 0 0 0 1 0v-1h1v1a.5.5 0 0 0 1 0v-1h2a2 2 0 0 0 2-2v-2h1a.5.5 0 0 0 0-1h-1v-1h1a.5.5 0 0 0 0-1h-1v-1h1a.5.5 0 0 0 0-1h-1v-2a2 2 0 0 0-2-2h-2v-1a.5.5 0 0 0-1 0v1h-1zm-6 3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1z"
                clipRule="evenodd"
            />
        </svg>
    );
}
