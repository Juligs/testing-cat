import type { SVGProps } from 'react';
export default function SvgEnhancedSecurity(props: SVGProps<SVGSVGElement>) {
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
                d="M14.092 10.794a.5.5 0 0 0-.809-.588l-1.615 2.22-.845-.714a.5.5 0 0 0-.646.763l.845.715a1 1 0 0 0 1.455-.175z"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12 18.071a6.325 6.325 0 0 0 5-6.185V7.18l-5-1.25-5 1.25v4.708a6.325 6.325 0 0 0 5 6.184M8 7.96v3.928a5.325 5.325 0 0 0 4 5.157 5.325 5.325 0 0 0 4-5.158V7.96l-4-1z"
                clipRule="evenodd"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12 20.5a8.855 8.855 0 0 0 7-8.659V5.25L12 3.5 5 5.25v6.591a8.855 8.855 0 0 0 7 8.659M6 6.03v5.811a7.856 7.856 0 0 0 6 7.633c3.512-.852 6-4 6-7.633v-5.81l-6-1.5z"
                clipRule="evenodd"
            />
        </svg>
    );
}
