import type { SVGProps } from 'react';
export default function SvgRisk(props: SVGProps<SVGSVGElement>) {
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
                strokeLinecap="round"
                strokeWidth={2}
                d="M37.856 37A16 16 0 0 0 32 15.144m-3.859-1.599A16 16 0 0 0 10.144 37"
            />
            <path
                fill="currentColor"
                d="M26.572 32.138a3 3 0 1 1-5.796-1.553c.27-1.003 3.039-5.708 5.069-9.08.541-.9 1.9-.458 1.81.588-.33 3.82-.817 9.051-1.083 10.045"
            />
        </svg>
    );
}
