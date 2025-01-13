import type { SVGProps } from 'react';
export default function SvgYoutube(props: SVGProps<SVGSVGElement>) {
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
                d="M21.22 6.288C20.5 5.373 19.167 5 16.62 5H7.38C4.776 5 3.42 5.397 2.7 6.37 2 7.32 2 8.72 2 10.656v3.69C2 18.095 2.832 20 7.38 20h9.24c2.208 0 3.43-.33 4.222-1.136.812-.828 1.158-2.18 1.158-4.519v-3.69c0-2.042-.054-3.449-.78-4.367m-6.38 6.721-4.196 2.338a.61.61 0 0 1-.633-.022.7.7 0 0 1-.31-.588v-4.659c0-.24.117-.463.31-.588a.61.61 0 0 1 .632-.022l4.196 2.322a.7.7 0 0 1 .348.61.7.7 0 0 1-.347.61"
            />
        </svg>
    );
}
