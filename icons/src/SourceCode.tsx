import type { SVGProps } from 'react';
export default function SvgSourceCode(props: SVGProps<SVGSVGElement>) {
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
                d="M8.023 7.139a.5.5 0 0 1 .016.707L4.067 12l3.972 4.155a.5.5 0 1 1-.723.69l-4.302-4.5a.5.5 0 0 1 0-.69l4.302-4.5a.5.5 0 0 1 .707-.016M15.977 7.139a.5.5 0 0 0-.016.707L19.934 12l-3.972 4.155a.5.5 0 0 0 .723.69l4.302-4.5a.5.5 0 0 0 0-.69l-4.302-4.5a.5.5 0 0 0-.707-.016M13.429 7.02a.5.5 0 0 1 .342.618l-2.581 9a.5.5 0 1 1-.961-.276l2.581-9a.5.5 0 0 1 .619-.342"
                clipRule="evenodd"
            />
        </svg>
    );
}
