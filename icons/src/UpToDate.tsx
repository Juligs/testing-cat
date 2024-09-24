import type { SVGProps } from 'react';
export default function SvgUpToDate(props: SVGProps<SVGSVGElement>) {
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
                fill="currentColor"
                fillRule="evenodd"
                d="M24.4 35a9.6 9.6 0 0 0 9.6-9.6v-.8a9.6 9.6 0 0 0-9.6-9.6h-.8a9.6 9.6 0 0 0-9.6 9.6v.8a9.6 9.6 0 0 0 9.6 9.6zm-3.07-7.221a.5.5 0 0 1-.088-.123l-2.912-2.912a.467.467 0 0 1 0-.66l.754-.754a.467.467 0 0 1 .66 0l2.688 2.687 5.309-5.31a.467.467 0 0 1 .66 0l.754.755a.467.467 0 0 1 0 .66l-6.41 6.41a.467.467 0 0 1-.661 0z"
                clipRule="evenodd"
            />
            <path fill="currentColor" d="M16.8 36.8a3.2 3.2 0 1 1-6.4 0 3.2 3.2 0 0 1 6.4 0" />
            <path stroke="currentColor" strokeWidth={2} d="M40 25a16 16 0 1 0-1.683 7.142" />
            <path fill="currentColor" d="m39 32.5-1-.5-5 7 4.5 3z" />
        </svg>
    );
}
