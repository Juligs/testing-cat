import type { SVGProps } from 'react';
export default function SvgFlexibleAndExpandable(props: SVGProps<SVGSVGElement>) {
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
                d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1h4.19L5 10.19V6a1 1 0 0 1 1-1m13 5.19L13.81 5H18a1 1 0 0 1 1 1zM13.81 19 19 13.81V18a1 1 0 0 1-1 1zM5 13.81 10.19 19H6a1 1 0 0 1-1-1zm8.83-5.799h1.159a1 1 0 0 1 1 1v1.16zm-1.873 0h.086c.242.01.48.108.664.292l2.99 2.99a1 1 0 0 1 .292.664v.086a1 1 0 0 1-.292.664l-2.99 2.99a1 1 0 0 1-.664.292h-.086a1 1 0 0 1-.664-.292l-2.99-2.99a1 1 0 0 1-.292-.664v-.086a1 1 0 0 1 .292-.664l2.99-2.99a1 1 0 0 1 .664-.292m.104-1H9.593l1.7-1.7a1 1 0 0 1 1.414 0l1.7 1.7zm-1.89 1-2.16 2.16V9.01a1 1 0 0 1 1-1zm-3.16 3.928V9.593l-1.7 1.7a1 1 0 0 0 0 1.414l1.7 1.7v-2.468m1 1.89v1.16a1 1 0 0 0 1 1h1.16zm3.929 3.16h2.467l-1.7 1.7a1 1 0 0 1-1.414 0l-1.7-1.7zm1.89-1h1.159a1 1 0 0 0 1-1v-1.16zm3.159-3.929v2.347l1.7-1.7a1 1 0 0 0 0-1.414l-1.7-1.7v2.467"
                clipRule="evenodd"
            />
        </svg>
    );
}
