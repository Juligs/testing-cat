import type { SVGProps } from 'react';
export default function SvgDownload(props: SVGProps<SVGSVGElement>) {
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
                d="M12.5 4.5a.5.5 0 0 0-1 0v9.793l-2.328-2.328a.5.5 0 1 0-.708.707l3.182 3.182a.5.5 0 0 0 .707 0l3.183-3.182a.5.5 0 1 0-.708-.708L12.5 14.294zM6.5 17a.5.5 0 0 0-1 0v2.5a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V17a.5.5 0 0 0-1 0v2h-11z"
            />
        </svg>
    );
}
