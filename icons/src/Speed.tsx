import type { SVGProps } from 'react';
export default function SvgSpeed(props: SVGProps<SVGSVGElement>) {
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
                d="M14.874 7.33594C15.2728 6.99447 15.8474 7.41797 15.6392 7.8999C14.8265 9.78011 13.649 12.4422 13.291 12.9277C12.727 13.6927 11.7042 13.8959 11.0068 13.3818C10.3095 12.8677 10.2016 11.8304 10.7656 11.0654C11.124 10.5797 13.3183 8.66799 14.874 7.33594Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5ZM12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5Z"
                fill="currentColor"
            />
        </svg>
    );
}
