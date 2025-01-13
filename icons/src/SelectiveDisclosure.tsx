import type { SVGProps } from 'react';
export default function SvgSelectiveDisclosure(props: SVGProps<SVGSVGElement>) {
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
                d="M10.48 6.012a.5.5 0 0 1 .11.698l-1.5 2.065a1 1 0 0 1-1.455.175l-.771-.652a.5.5 0 1 1 .646-.763l.77.652 1.502-2.065a.5.5 0 0 1 .699-.11"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12.5 7.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-1 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
                clipRule="evenodd"
            />
            <path
                fill="currentColor"
                d="M13.5 6.5A.5.5 0 0 1 14 6h5.5a.5.5 0 0 1 0 1H14a.5.5 0 0 1-.5-.5M13.5 8.5A.5.5 0 0 1 14 8h5.5a.5.5 0 0 1 0 1H14a.5.5 0 0 1-.5-.5M14 15a.5.5 0 0 0 0 1h5.5a.5.5 0 0 0 0-1zM13.5 17.5a.5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 0 1H14a.5.5 0 0 1-.5-.5M7.004 15.004a.5.5 0 0 1 .707 0l.789.789.79-.79a.5.5 0 1 1 .706.708l-.789.789.79.79a.5.5 0 0 1-.708.706l-.789-.789-.79.79a.5.5 0 1 1-.706-.708l.789-.789-.79-.79a.5.5 0 0 1 0-.706"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12.5 16.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-1 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
                clipRule="evenodd"
            />
        </svg>
    );
}
