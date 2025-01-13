import type { SVGProps } from 'react';
export default function SvgQuotes(props: SVGProps<SVGSVGElement>) {
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
                d="M11.085 7.5v1.602q-2.563 0-2.563 2.387v.535H11V16.5H6.5v-4.948q0-1.884 1.235-2.968Q8.985 7.5 11.085 7.5M18 7.5v1.602q-2.531 0-2.531 2.387v.535H18V16.5h-4.585v-4.948q0-1.884 1.235-2.968Q15.9 7.5 18 7.5"
            />
        </svg>
    );
}
