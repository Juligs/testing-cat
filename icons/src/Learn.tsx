import type { SVGProps } from 'react';
export default function SvgLearn(props: SVGProps<SVGSVGElement>) {
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
                width={24}
                height={16}
                x={24}
                y={12}
                stroke="currentColor"
                strokeWidth={2}
                rx={2}
                transform="rotate(90 24 12)"
            />
            <rect
                width={24}
                height={16}
                x={41}
                y={12}
                stroke="currentColor"
                strokeWidth={2}
                rx={2}
                transform="rotate(90 41 12)"
            />
            <rect
                width={2}
                height={8}
                x={20}
                y={16}
                fill="currentColor"
                rx={1}
                transform="rotate(90 20 16)"
            />
            <rect
                width={2}
                height={6}
                x={18}
                y={21}
                fill="currentColor"
                rx={1}
                transform="rotate(90 18 21)"
            />
            <rect
                width={2}
                height={8}
                x={37}
                y={30}
                fill="currentColor"
                rx={1}
                transform="rotate(90 37 30)"
            />
        </svg>
    );
}
