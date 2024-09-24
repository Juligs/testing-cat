import type { SVGProps } from 'react';
export default function SvgMusic(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 48 48"
            {...props}
        >
            <path
                stroke="currentColor"
                strokeWidth={1.5}
                d="M40 24c0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8s16 7.163 16 16Z"
            />
            <path
                stroke="currentColor"
                strokeWidth={1.5}
                d="M31 24a7 7 0 1 1-14 0 7 7 0 1 1 14 0Z"
            />
            <path
                fill="currentColor"
                d="M26 24a2 2 0 1 1-4 0 2 2 0 0 1 4 0M8.545 28.141A16 16 0 0 1 28.141 8.545l-2.332 8.706a6.99 6.99 0 0 0-8.558 8.557zm30.91-8.282a16 16 0 0 1-19.596 19.596l2.332-8.706a6.99 6.99 0 0 0 8.558-8.557z"
            />
        </svg>
    );
}
