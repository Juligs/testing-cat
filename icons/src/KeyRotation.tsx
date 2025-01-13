import type { SVGProps } from 'react';
export default function SvgKeyRotation(props: SVGProps<SVGSVGElement>) {
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
                d="M18.977 11.493C18.717 7.865 15.68 5 11.972 5a7.03 7.03 0 0 0-6.514 4.376.5.5 0 1 1-.926-.377A8.03 8.03 0 0 1 11.972 4c4.248 0 7.727 3.293 8.005 7.461l.499-.499a.5.5 0 1 1 .707.707l-1.368 1.369a.5.5 0 0 1-.707 0l-1.369-1.369a.5.5 0 0 1 .707-.707z"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12.67 11.45a2.5 2.5 0 1 0-1 0V14h-1.5a.5.5 0 0 0 0 1h1.5v1h-1.5a.5.5 0 0 0 0 1h1.5v.5a.5.5 0 0 0 1 0zm1-2.45a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
                clipRule="evenodd"
            />
            <path
                fill="currentColor"
                d="M4.892 10.962a.5.5 0 0 0-.707 0l-1.369 1.369a.5.5 0 1 0 .707.707l.49-.49C4.296 16.712 7.773 20 12.018 20a8.03 8.03 0 0 0 7.44-5 .5.5 0 1 0-.926-.376A7.03 7.03 0 0 1 12.018 19c-3.712 0-6.75-2.87-7.006-6.503l.541.54a.5.5 0 1 0 .707-.706z"
            />
        </svg>
    );
}
