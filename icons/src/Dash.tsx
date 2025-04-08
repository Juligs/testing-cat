import type { SVGProps } from 'react';
export default function SvgDash(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g>
                <rect x="7" y="11.25" width="10" height="2" rx="1" fill="currentColor" />
            </g>
        </svg>
    );
}
