import type { SVGProps } from 'react';
export default function SvgConflictOfInterest(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 48 48"
            {...props}
        >
            <path
                stroke="currentColor"
                strokeWidth={2}
                d="m41.12 34.494-.864.502.864-.502L26.594 9.477c-1.156-1.992-4.032-1.992-5.188 0L6.88 34.494C5.718 36.494 7.16 39 9.474 39h29.052c2.313 0 3.756-2.506 2.594-4.506Z"
            />
            <path
                fill="currentColor"
                d="M28 33c1.105 0 2.031-.92 1.67-1.963a6 6 0 0 0-9.913-2.28 6 6 0 0 0-1.427 2.28C17.97 32.08 18.895 33 20 33z"
            />
            <circle cx={24} cy={22} r={3} fill="currentColor" />
        </svg>
    );
}
