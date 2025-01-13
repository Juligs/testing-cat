import type { SVGProps } from 'react';
export default function SvgLoyaltyTokens(props: SVGProps<SVGSVGElement>) {
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
                fillRule="evenodd"
                d="M16.5 9.5a.5.5 0 0 0-.854-.354l-1.437 1.438-1.225-.952a1.5 1.5 0 1 0-1.93.032L10 10.586 8.33 9.124a.5.5 0 0 0-.83.376v4a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5zm-6.17 2.126 1.689-1.478 1.924 1.497a.5.5 0 0 0 .66-.041l.897-.897V13h-7v-2.398l1.17 1.024a.5.5 0 0 0 .66 0M12.5 8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
                clipRule="evenodd"
            />
            <path
                fill="currentColor"
                d="M7.5 15.5A.5.5 0 0 1 8 15h8a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M20.5 12a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0m-1 0a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0"
                clipRule="evenodd"
            />
        </svg>
    );
}
