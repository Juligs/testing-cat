import type { SVGProps } from 'react';
export default function SvgShield(props: SVGProps<SVGSVGElement>) {
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
                fillRule="evenodd"
                d="M38.974 16.104a1.93 1.93 0 0 0-1.147-1.826L25.654 8.75a4 4 0 0 0-3.308 0l-12.173 5.527a1.93 1.93 0 0 0-1.147 1.826c.547 13.416 9.516 20.52 13.305 22.934a3.06 3.06 0 0 0 3.333-.008c3.786-2.434 12.76-9.583 13.31-22.927ZM28 21c0 1.48-.804 2.773-2 3.465V29a2 2 0 1 1-4 0v-4.535A4 4 0 1 1 28 21"
                clipRule="evenodd"
            />
        </svg>
    );
}
