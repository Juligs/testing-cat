import type { SVGProps } from 'react';
export default function SvgRobustComplianceControls(props: SVGProps<SVGSVGElement>) {
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
                d="M16.794 6.096a.5.5 0 0 1 .11.698L15.403 8.86a1 1 0 0 1-1.455.175l-.771-.652a.5.5 0 1 1 .646-.764l.771.653 1.502-2.065a.5.5 0 0 1 .698-.11M8 7.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM16.794 10.096a.5.5 0 0 1 .11.698l-1.501 2.065a1 1 0 0 1-1.455.175l-.771-.652a.5.5 0 1 1 .646-.764l.771.653 1.502-2.065a.5.5 0 0 1 .698-.11M16.904 14.794a.5.5 0 0 0-.808-.588l-1.502 2.065-.771-.653a.5.5 0 1 0-.646.764l.771.652a1 1 0 0 0 1.455-.175zM7.5 12a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5M8 15.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M7.5 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2H17a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM17 5H7.5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1"
                clipRule="evenodd"
            />
        </svg>
    );
}
