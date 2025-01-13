import type { SVGProps } from 'react';
export default function SvgOnChainMetadata(props: SVGProps<SVGSVGElement>) {
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
                d="M6.5 7a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5M7 9a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1zM6.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12.5 15H18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h5.5v1.063a2 2 0 0 0-1.437 1.437H4.5a.5.5 0 0 0 0 1h5.563a2 2 0 0 0 3.875-.004q.03.004.062.004h5.5a.5.5 0 0 0 0-1H14l-.062.004a2 2 0 0 0-1.438-1.441zM6 5h12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1m5 13.01a1 1 0 1 0 0-.01z"
                clipRule="evenodd"
            />
        </svg>
    );
}
