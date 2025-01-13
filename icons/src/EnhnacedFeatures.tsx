import type { SVGProps } from 'react';
export default function SvgEnhnacedFeatures(props: SVGProps<SVGSVGElement>) {
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
                d="M4 6a2 2 0 0 1 2-2h3.5a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1h3.5a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1M12.5 6a2 2 0 0 1 2-2H18a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2zm2-1H18a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1h-3.5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1M6 12.5a2 2 0 0 0-2 2V18a2 2 0 0 0 2 2h3.5a2 2 0 0 0 2-2v-3.5a2 2 0 0 0-2-2zm3.5 1H6a1 1 0 0 0-1 1V18a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1"
                clipRule="evenodd"
            />
            <path
                fill="currentColor"
                d="M16.715 12.675a.5.5 0 0 0-.93 0l-.672 1.7a.5.5 0 0 1-.423.315l-1.79.15a.5.5 0 0 0-.292.87l1.4 1.26a.5.5 0 0 1 .152.483l-.42 1.855a.5.5 0 0 0 .757.532l1.483-.953a.5.5 0 0 1 .54 0l1.483.953a.5.5 0 0 0 .758-.532l-.421-1.855a.5.5 0 0 1 .153-.482l1.399-1.26a.5.5 0 0 0-.293-.87l-1.789-.151a.5.5 0 0 1-.422-.314z"
            />
        </svg>
    );
}
