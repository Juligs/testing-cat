import type { SVGProps } from 'react';
export default function SvgInfoOutlined(props: SVGProps<SVGSVGElement>) {
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
                d="M13.2 15.6a1.2 1.2 0 0 1-2.4 0V12a1.2 1.2 0 0 1 2.4 0zM10.8 7.8a1.2 1.2 0 1 1 2.4 0 1.2 1.2 0 0 1-2.4 0"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11m0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
                clipRule="evenodd"
            />
        </svg>
    );
}
