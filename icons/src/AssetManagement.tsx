import type { SVGProps } from 'react';
export default function SvgAssetManagement(props: SVGProps<SVGSVGElement>) {
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
                d="M6.367 6.32a8 8 0 1 1-.047.047l.023-.024zM12.5 5.018a7 7 0 0 1 0 13.964V15.97a4 4 0 0 0 0-7.938zm-1 3.013V5.018a7 7 0 0 0-4.084 1.691L9.547 8.84a4 4 0 0 1 1.953-.809M8.84 9.547l-2.13-2.13A7 7 0 0 0 5.017 11.5H8.03c.091-.73.379-1.4.81-1.953M8.031 12.5H5.018a7 7 0 0 0 6.482 6.482V15.97A4 4 0 0 1 8.031 12.5M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6"
                clipRule="evenodd"
            />
        </svg>
    );
}
