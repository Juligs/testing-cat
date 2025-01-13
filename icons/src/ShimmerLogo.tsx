import type { SVGProps } from 'react';
export default function SvgShimmerLogo(props: SVGProps<SVGSVGElement>) {
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
                d="M17.241 6.023c-2.4-2.647-6.345-2.704-8.81-.128-2.467 2.576-2.52 6.81-.12 9.456l1.579-1.649c-1.548-1.716-1.511-4.455.085-6.123 1.597-1.667 4.149-1.634 5.707.073zM6.759 16.978c2.4 2.646 6.345 2.703 8.81.127 2.467-2.576 2.52-6.81.12-9.456L14.11 9.297c1.547 1.717 1.51 4.456-.086 6.124s-4.149 1.634-5.706-.073z"
            />
        </svg>
    );
}
