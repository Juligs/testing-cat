import type { SVGProps } from 'react';
export default function SvgStack(props: SVGProps<SVGSVGElement>) {
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
                fill="currentColor"
                stroke="currentColor"
                strokeWidth={2}
                d="M22.211 8.894a4 4 0 0 1 3.578 0l12.422 6.212a1 1 0 0 1 0 1.788L25.79 23.106a4 4 0 0 1-3.578 0L9.79 16.894a1 1 0 0 1 0-1.788z"
            />
            <path
                stroke="currentColor"
                strokeWidth={2}
                d="M22.211 15.894a4 4 0 0 1 3.578 0l12.422 6.212a1 1 0 0 1 0 1.788L25.79 30.106a4 4 0 0 1-3.578 0L9.79 23.894a1 1 0 0 1 0-1.788l12.422-6.212Z"
            />
            <path
                stroke="currentColor"
                strokeWidth={2}
                d="m16 27-6.211 3.106a1 1 0 0 0 0 1.788l12.422 6.212a4 4 0 0 0 3.578 0l12.422-6.212a1 1 0 0 0 0-1.788L32 27"
            />
        </svg>
    );
}
