import type { SVGProps } from 'react';
export default function SvgDataInsights(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <path fill="currentColor" d="M12.297 3a.5.5 0 0 0-1 0v1.594a.5.5 0 1 0 1 0z" />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M15.27 13.94c-.435.48-.77 1.068-.77 1.715V17a2 2 0 0 1-1 1.733v.017a1.75 1.75 0 1 1-3.5 0v-.018A2 2 0 0 1 9 17v-1.345c0-.647-.335-1.236-.77-1.715a4.75 4.75 0 1 1 7.04 0m-.74-.672a3.75 3.75 0 1 0-5.558 0c.517.571 1.028 1.39 1.028 2.387V17a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-1.345c0-.996.51-1.816 1.03-2.387"
                clipRule="evenodd"
            />
            <path
                fill="currentColor"
                d="M7.648 3.612a.5.5 0 0 1 .683.183l.797 1.38a.5.5 0 1 1-.866.5l-.797-1.38a.5.5 0 0 1 .183-.683M5.295 6.465a.5.5 0 0 0-.5.866l1.38.797a.5.5 0 0 0 .5-.866zM3.5 10.797a.5.5 0 0 1 .5-.5h1.594a.5.5 0 1 1 0 1H4a.5.5 0 0 1-.5-.5M18 10.297a.5.5 0 1 0 0 1h1.594a.5.5 0 0 0 0-1zM16.736 7.945a.5.5 0 0 1 .183-.683l1.38-.797a.5.5 0 0 1 .5.866l-1.38.797a.5.5 0 0 1-.683-.183M14.465 5.175a.5.5 0 0 0 .866.5l.797-1.38a.5.5 0 0 0-.866-.5z"
            />
        </svg>
    );
}
