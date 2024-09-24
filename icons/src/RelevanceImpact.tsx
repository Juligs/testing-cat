import type { SVGProps } from 'react';
export default function SvgRelevanceImpact(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 48 48"
            {...props}
        >
            <path stroke="currentColor" strokeWidth={2} d="M37.23 15.002a16 16 0 1 1-2.262-2.651" />
            <path stroke="currentColor" strokeWidth={2} d="M31.794 19.5a9 9 0 1 1-1.43-1.864" />
            <circle cx={24} cy={24} r={3} fill="currentColor" transform="rotate(-90 24 24)" />
            <path stroke="currentColor" strokeWidth={2} d="m24.293 23.293 13-13" />
        </svg>
    );
}
