import type { SVGProps } from 'react';
export default function SvgQuotes(props: SVGProps<SVGSVGElement>) {
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
                d="M22.17 15v3.204q-5.126 0-5.126 4.775v1.068H22V33h-9v-9.895q0-3.77 2.47-5.938Q17.97 15 22.17 15M36 15v3.204q-5.063 0-5.063 4.775v1.068H36V33h-9.17v-9.895q0-3.77 2.47-5.938Q31.802 15.001 36 15"
            />
        </svg>
    );
}
