import type { SVGProps } from 'react';
export default function SvgFrame(props: SVGProps<SVGSVGElement>) {
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
                d="M21.7285 18.0002L13.7285 4.00022C13.554 3.69243 13.3011 3.43641 12.9954 3.25829C12.6897 3.08017 12.3423 2.98633 11.9885 2.98633C11.6347 2.98633 11.2872 3.08017 10.9815 3.25829C10.6759 3.43641 10.4229 3.69243 10.2485 4.00022L2.24846 18.0002C2.07215 18.3056 1.97969 18.6521 1.98047 19.0047C1.98125 19.3573 2.07524 19.7035 2.25291 20.008C2.43058 20.3126 2.68561 20.5648 2.99216 20.7391C3.29871 20.9133 3.64587 21.0034 3.99846 21.0002H19.9985C20.3494 20.9999 20.694 20.9072 20.9977 20.7315C21.3015 20.5558 21.5537 20.3033 21.729 19.9993C21.9043 19.6954 21.9965 19.3506 21.9964 18.9997C21.9963 18.6488 21.9039 18.3041 21.7285 18.0002Z"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 9V13"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 17H12.01"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
