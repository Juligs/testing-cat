import type { SVGProps } from 'react';
export default function SvgEvents(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 48 48"
            {...props}
        >
            <rect
                width={26}
                height={34}
                x={41}
                y={11}
                stroke="currentColor"
                strokeWidth={2}
                rx={3}
                transform="rotate(90 41 11)"
            />
            <path fill="currentColor" d="M38 12a2 2 0 0 1 2 2v4H8v-4a2 2 0 0 1 2-2z" />
            <rect
                width={4}
                height={8}
                x={36}
                y={28}
                fill="currentColor"
                rx={2}
                transform="rotate(90 36 28)"
            />
        </svg>
    );
}
