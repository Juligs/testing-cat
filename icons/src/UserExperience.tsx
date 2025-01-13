import type { SVGProps } from 'react';
export default function SvgUserExperience(props: SVGProps<SVGSVGElement>) {
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
                d="M10.187 16a2 2 0 1 1-.862-2.187l4.668-4.357a2 2 0 0 1-.18-.456h-3.626a2 2 0 1 1 0-1h3.626a2 2 0 1 1 .862 2.187l-4.668 4.357q.118.214.18.456h3.626a2 2 0 1 1 0 1zm-.937-.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m6.5-6a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-6.5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                clipRule="evenodd"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1"
                clipRule="evenodd"
            />
        </svg>
    );
}
