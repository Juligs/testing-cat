import type { SVGProps } from 'react';
export default function SvgVisitWebsite(props: SVGProps<SVGSVGElement>) {
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
                d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0 1a8 8 0 1 0 0-16 8 8 0 0 0 0 16"
                clipRule="evenodd"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M13.934 17.21C14.574 15.928 15 14.088 15 12s-.425-3.928-1.066-5.21C13.264 5.45 12.522 5 12 5s-1.263.449-1.934 1.79C9.426 8.072 9 9.912 9 12s.425 3.928 1.066 5.21C10.736 18.55 11.478 19 12 19s1.263-.449 1.934-1.79M12 20c2.21 0 4-3.582 4-8s-1.79-8-4-8-4 3.582-4 8 1.79 8 4 8"
                clipRule="evenodd"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M5.818 17.078C7.285 15.504 9.51 14.5 12 14.5s4.715 1.004 6.182 2.578q-.32.39-.685.735C16.235 16.42 14.277 15.5 12 15.5s-4.235.921-5.496 2.313a8 8 0 0 1-.686-.735M6.502 6.189q-.365.345-.684.733.19.204.396.394C7.671 8.662 9.724 9.5 12 9.5s4.329-.838 5.786-2.184q.206-.19.396-.394a8 8 0 0 0-.684-.733 7 7 0 0 1-.39.393C15.84 7.752 14.03 8.5 12 8.5s-3.84-.748-5.107-1.918a7 7 0 0 1-.391-.393M19.627 12.5H4.373v-1h15.253z"
                clipRule="evenodd"
            />
        </svg>
    );
}
