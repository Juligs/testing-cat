import type { SVGProps } from 'react';
export default function SvgFees(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 48 48"
            {...props}
        >
            <rect width={4} height={30} x={8} y={9} fill="currentColor" rx={2} />
            <rect width={4} height={16} x={22} y={23} fill="currentColor" rx={2} />
            <rect width={4} height={12} x={29} y={27} fill="currentColor" rx={2} />
            <rect width={4} height={24} x={15} y={15} fill="currentColor" rx={2} />
            <rect width={4} height={8} x={36} y={31} fill="currentColor" rx={2} />
        </svg>
    );
}
