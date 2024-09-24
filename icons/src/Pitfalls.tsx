import type { SVGProps } from 'react';
export default function SvgPitfalls(props: SVGProps<SVGSVGElement>) {
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
                strokeWidth={3}
                d="M22.992 23.412a2 2 0 0 0 2.016 0l10.842-6.324a.1.1 0 0 1 .15.086v13.064a2 2 0 0 1-.923 1.685L24 39l-11.077-7.077A2 2 0 0 1 12 30.238V17.174a.1.1 0 0 1 .15-.086z"
            />
            <path
                stroke="currentColor"
                strokeWidth={3}
                d="M22.952 8.645a2 2 0 0 1 2.096 0l10.568 6.503a1 1 0 0 1 0 1.704l-10.568 6.503a2 2 0 0 1-2.096 0l-10.568-6.503a1 1 0 0 1 0-1.704z"
            />
            <path
                fill="currentColor"
                d="M28.732 35.34c2.298.349 4.144.94 5.226 1.673s1.33 1.563.705 2.347c-.626.785-2.088 1.477-4.136 1.957s-4.558.72-7.099.678-4.958-.363-6.839-.909c-1.88-.545-3.109-1.281-3.475-2.083-.366-.8.153-1.618 1.468-2.311 1.314-.694 3.344-1.22 5.743-1.49L24 38.5z"
            />
        </svg>
    );
}
