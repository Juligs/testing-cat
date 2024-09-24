import type { SVGProps } from 'react';
export default function SvgShow(props: SVGProps<SVGSVGElement>) {
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
                d="M19.983 14.195c1.29-1.212 1.29-3.178 0-4.39C18.157 8.092 15.26 6 12 6S5.843 8.092 4.017 9.805c-1.29 1.212-1.29 3.178 0 4.39C5.843 15.908 8.74 18 12 18c3.261 0 6.157-2.092 7.983-3.805M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
                clipRule="evenodd"
            />
            <path fill="currentColor" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
        </svg>
    );
}
