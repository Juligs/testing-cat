import type { SVGProps } from 'react';
export default function SvgBuiltWithPartners(props: SVGProps<SVGSVGElement>) {
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
                d="M16.242 15.992q.008.127.008.258a4 4 0 1 1-7.992-.258 4 4 0 1 1 0-7.984 4 4 0 1 1 7.984 0Q16.37 8 16.5 8a4 4 0 1 1-.258 7.992M12.25 10.75a3 3 0 1 0-2.965-2.54 4.01 4.01 0 0 1 2.504 2.505q.225.035.461.035m-.258.992a4 4 0 0 0 .516 0 4 4 0 0 0 0 .516 4 4 0 0 0-.516 0 4 4 0 0 0 0-.516m.719 1.543a3 3 0 1 0 2.504 2.504 4.01 4.01 0 0 1-2.504-2.504m3.328-4.25a4.01 4.01 0 0 1-2.504 2.504q-.035.225-.035.461a3 3 0 1 0 2.54-2.965m-5.074 3.426a4.01 4.01 0 0 0-2.504 2.504 3 3 0 1 1 2.504-2.504"
                clipRule="evenodd"
            />
        </svg>
    );
}
