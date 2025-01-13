import type { SVGProps } from 'react';
export default function SvgIotaClientCli(props: SVGProps<SVGSVGElement>) {
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
                d="M16.5 15h-5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1M7.146 9.854a.5.5 0 1 1 .708-.708l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L9.293 12z"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M6 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm12 1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1"
                clipRule="evenodd"
            />
        </svg>
    );
}
