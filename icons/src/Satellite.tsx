import type { SVGProps } from 'react';
export default function SvgSatellite(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 48 48"
            {...props}
        >
            <g stroke="currentColor" strokeWidth={2} clipPath="url(#satellite_svg__a)">
                <rect
                    width={14.186}
                    height={9.123}
                    x={15.451}
                    y={3}
                    rx={2}
                    transform="rotate(45 15.451 3)"
                />
                <path d="m22.273 16.646 2.829 2.828m5.657 5.657 2.828 2.829" />
                <rect
                    width={14.357}
                    height={9.123}
                    x={36.813}
                    y={24.734}
                    rx={2}
                    transform="rotate(45 36.813 24.734)"
                />
                <rect
                    width={8}
                    height={22.275}
                    x={32.367}
                    y={12.209}
                    rx={2}
                    transform="rotate(45 32.367 12.209)"
                />
                <path
                    fill="#fff"
                    d="M14.495 27.252a6 6 0 0 1 8.486 8.486l-2.025 2.024a.137.137 0 0 1-.194 0l-8.29-8.291a.137.137 0 0 1 0-.194z"
                />
                <path d="m10.998 34-.221.221a3.927 3.927 0 0 0 5.554 5.554l.221-.221" />
                <path d="m7.373 31-.47.47a8.348 8.348 0 0 0 11.806 11.806l.47-.47" />
            </g>
            <defs>
                <clipPath id="satellite_svg__a">
                    <path fill="#fff" d="M0 0h48v48H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}
