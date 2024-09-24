import type { SVGProps } from 'react';
export default function SvgIncentives(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 48 48"
            {...props}
        >
            <circle cx={40} cy={25} r={4} fill="currentColor" />
            <circle cx={4} cy={4} r={4} fill="currentColor" transform="matrix(-1 0 0 1 12 21)" />
            <circle cx={34} cy={16} r={3} fill="currentColor" />
            <circle cx={3} cy={3} r={3} fill="currentColor" transform="matrix(-1 0 0 1 17 13)" />
            <circle cx={24} cy={16} r={3} fill="currentColor" />
            <circle cx={3} cy={3} r={3} fill="currentColor" transform="matrix(-1 0 0 1 27 13)" />
            <circle cx={3} cy={3} r={3} fill="currentColor" transform="matrix(1 0 0 -1 31 37)" />
            <circle cx={14} cy={34} r={3} fill="currentColor" transform="rotate(180 14 34)" />
            <circle cx={3} cy={3} r={3} fill="currentColor" transform="matrix(1 0 0 -1 21 37)" />
            <circle cx={24} cy={34} r={3} fill="currentColor" transform="rotate(180 24 34)" />
            <circle cx={30} cy={25} r={4} fill="currentColor" />
            <circle cx={4} cy={4} r={4} fill="currentColor" transform="matrix(-1 0 0 1 22 21)" />
            <circle cx={29} cy={10} r={2} fill="currentColor" />
            <circle cx={2} cy={2} r={2} fill="currentColor" transform="matrix(-1 0 0 1 21 8)" />
            <circle cx={2} cy={2} r={2} fill="currentColor" transform="matrix(1 0 0 -1 27 42)" />
            <circle cx={19} cy={40} r={2} fill="currentColor" transform="rotate(180 19 40)" />
        </svg>
    );
}
