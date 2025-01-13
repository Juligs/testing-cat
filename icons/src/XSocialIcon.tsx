import type { SVGProps } from 'react';
export default function SvgXSocialIcon(props: SVGProps<SVGSVGElement>) {
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
                d="M13.705 10.623 20.402 3h-1.587l-5.817 6.617L8.356 3H3l7.022 10.007L3 21h1.586l6.14-6.99L15.628 21h5.356M5.159 4.17h2.437l11.218 15.715h-2.437"
            />
        </svg>
    );
}
