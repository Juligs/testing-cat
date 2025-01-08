import { Skeleton } from 'react-ui-kit';

export function DisplayStatsSkeleton() {
    return (
        <div className="w-full h-full ">
            <Skeleton height="h-[180px] !rounded-3xl" />
        </div>
    );
}
