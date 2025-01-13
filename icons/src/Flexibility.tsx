import type { SVGProps } from 'react';
export default function SvgFlexibility(props: SVGProps<SVGSVGElement>) {
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
                d="M8.752 11.637a1 1 0 0 1-1.415 0l-2.9-2.9a1 1 0 0 1 0-1.415l2.9-2.9a1 1 0 0 1 1.415 0l2.9 2.9a1 1 0 0 1 0 1.414zm-.708-.707-2.9-2.9 2.9-2.902 2.901 2.901zM12.6 6.433a2 2 0 0 1 2-2h3.191a2 2 0 0 1 2 2v3.192a2 2 0 0 1-2 2h-3.192a2 2 0 0 1-2-2zm2-1h3.191a1 1 0 0 1 1 1v3.192a1 1 0 0 1-1 1h-3.192a1 1 0 0 1-1-1V6.433a1 1 0 0 1 1-1M12.36 16.18a3.836 3.836 0 1 1 7.67 0 3.836 3.836 0 0 1-7.67 0m3.835 2.835a2.836 2.836 0 1 1 0-5.67 2.836 2.836 0 0 1 0 5.67M7.178 19.474a1 1 0 0 0 1.732 0l3.043-5.27a1 1 0 0 0-.866-1.5H5.001a1 1 0 0 0-.866 1.5zm-2.177-5.77 3.043 5.27 3.043-5.27z"
                clipRule="evenodd"
            />
        </svg>
    );
}
