import type { SVGProps } from 'react';
export default function SvgShimmerLogo(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 36 36"
            {...props}
        >
            <path
                fill="currentColor"
                d="M28.483 7.045c-4.8-5.292-12.69-5.406-17.623-.254-4.931 5.151-5.038 13.618-.237 18.91l3.156-3.296c-3.096-3.434-3.021-8.911.172-12.247 3.192-3.335 8.297-3.267 11.412.146zM7.517 28.955c4.801 5.292 12.69 5.406 17.623.254 4.931-5.151 5.038-13.618.237-18.91l-3.156 3.296c3.096 3.434 3.022 8.911-.171 12.246s-8.297 3.268-11.413-.146z"
            />
        </svg>
    );
}
