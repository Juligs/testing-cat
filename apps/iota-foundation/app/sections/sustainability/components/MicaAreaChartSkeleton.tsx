import { Skeleton } from 'react-ui-kit';

export function MicaAreaChartSkeleton() {
    return (
        <div className="grid grid-cols-1 xs:grid-cols-2 w-full">
            <div className="w-full h-full ">
                <Skeleton height="h-[481px] !rounded-3xl" />
            </div>
            <div className="w-full h-full ">
                <Skeleton height="h-[481px] !rounded-3xl" />
            </div>
        </div>
    );
}
