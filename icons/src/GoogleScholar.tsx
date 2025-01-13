import type { SVGProps } from 'react';
export default function SvgGoogleScholar(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <g clipPath="url(#google_scholar_svg__a)">
                <path
                    fill="currentColor"
                    d="M12 21a5.25 5.25 0 1 1 0-10.5A5.25 5.25 0 0 1 12 21m0-18-9 7.125 3.629 2.955a6 6 0 0 1 8.53-2.43 6 6 0 0 1 2.213 2.43L21 10.125z"
                />
            </g>
            <defs>
                <clipPath id="google_scholar_svg__a">
                    <path fill="#fff" d="M3 3h18v18H3z" />
                </clipPath>
            </defs>
        </svg>
    );
}
