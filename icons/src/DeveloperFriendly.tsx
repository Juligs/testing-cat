import type { SVGProps } from 'react';
export default function SvgDeveloperFriendly(props: SVGProps<SVGSVGElement>) {
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
                d="M10.184 9.135a.5.5 0 0 1 .024.706l-1.524 1.63 1.524 1.63a.5.5 0 0 1-.731.682l-1.842-1.97a.5.5 0 0 1 0-.683l1.842-1.971a.5.5 0 0 1 .707-.024M13.582 9.841a.5.5 0 1 1 .73-.682l1.843 1.97a.5.5 0 0 1 0 .683l-1.842 1.971a.5.5 0 1 1-.73-.682l1.522-1.63zM12.582 9.019a.5.5 0 0 1 .347.616l-1.105 3.942a.5.5 0 0 1-.963-.27l1.105-3.942a.5.5 0 0 1 .616-.346"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm10.5-1H18a1 1 0 0 1 1 1v9H5V7a1 1 0 0 1 1-1h3.5v.5a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1zM19 17a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zM13.5 6h-3v.5h3z"
                clipRule="evenodd"
            />
        </svg>
    );
}
