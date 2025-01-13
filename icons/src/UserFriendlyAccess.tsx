import type { SVGProps } from 'react';
export default function SvgUserFriendlyAccess(props: SVGProps<SVGSVGElement>) {
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
                d="M6.75 7a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M10 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M14.196 12.893a.5.5 0 1 0-.808-.588l-1.616 2.22-.844-.714a.5.5 0 1 0-.647.763l.845.715a1 1 0 0 0 1.455-.175z"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12 18a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5m0-1a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5"
                clipRule="evenodd"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1h12a1 1 0 0 1 1 1v1.5H5V6a1 1 0 0 1 1-1M5 8.5V18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.5z"
                clipRule="evenodd"
            />
        </svg>
    );
}
