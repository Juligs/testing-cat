import type { SVGProps } from 'react';
export default function SvgIntegrationWithLocalRetailers(props: SVGProps<SVGSVGElement>) {
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
                d="M6.5 4.5a2 2 0 0 0-2 2v2c0 .507.189.97.5 1.323V17.5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9.823c.311-.353.5-.816.5-1.323v-2a2 2 0 0 0-2-2zm0 1H8v3a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1m2.5 0v3a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-1v-3zm3.5 0v3a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-1v-3zm5.5 4.937q-.24.062-.5.063H17a2 2 0 0 1-1.5-.677 2 2 0 0 1-1.5.677h-.5a2 2 0 0 1-1.5-.677 2 2 0 0 1-1.5.677H10a2 2 0 0 1-1.5-.677A2 2 0 0 1 7 10.5h-.5q-.26 0-.5-.063V17.5a1 1 0 0 0 1 1h2.5v-4a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v4H17a1 1 0 0 0 1-1zM13.5 18.5v-4a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v4zm2.5-10v-3h1.5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H17a1 1 0 0 1-1-1"
                clipRule="evenodd"
            />
        </svg>
    );
}
