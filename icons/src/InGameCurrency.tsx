import type { SVGProps } from 'react';
export default function SvgInGameCurrency(props: SVGProps<SVGSVGElement>) {
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
                d="M3.525 10.157a.5.5 0 0 0 .104.178l7.997 8.997a.5.5 0 0 0 .748 0l7.997-8.997a.5.5 0 0 0 .06-.081.495.495 0 0 0-.034-.558l-.026-.031-3.997-4.497A.5.5 0 0 0 16 5H8a.5.5 0 0 0-.374.168L3.63 9.665a.5.5 0 0 0-.104.492M5.113 9.5h2.593L9.65 6H8.225zM10.794 6 8.85 9.5h6.3L13.206 6zm3.556 0 1.944 3.5h2.593L15.775 6zm-6.675 4.5H5.113l5.124 5.764zm1.094 0h6.462L12 17.769zm7.556 0-2.562 5.764 5.124-5.764z"
                clipRule="evenodd"
            />
        </svg>
    );
}
