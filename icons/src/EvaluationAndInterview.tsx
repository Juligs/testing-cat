import type { SVGProps } from 'react';
export default function SvgEvaluationAndInterview(props: SVGProps<SVGSVGElement>) {
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
                d="M7 8a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1zM6.5 11.5A.5.5 0 0 1 7 11h8a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M4 13.05V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2a2 2 0 0 1 2 2v4.571q0 .1-.01.198.01.063.01.13v2.486c0 .745-.87 1.167-1.472.714l-2.034-1.528H10a2 2 0 0 1-2-2v-.503l-2.283 1.714C5.014 17.31 4 16.818 4 15.95zm1-.002V7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7.757l-2.64 1.983c-.02.014-.031.016-.04.017a.1.1 0 0 1-.045-.01.1.1 0 0 1-.029-.022l-.001-.003q-.001 0-.002-.016v-2.9M9 15v.571a1 1 0 0 0 1 1h6.827L19 18.203v-2.296l-.017-.113.012-.123a1 1 0 0 0 .005-.1V11a1 1 0 0 0-1-1v3a2 2 0 0 1-2 2z"
                clipRule="evenodd"
            />
        </svg>
    );
}
