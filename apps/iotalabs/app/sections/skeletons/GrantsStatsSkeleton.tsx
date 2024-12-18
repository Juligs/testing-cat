import { Skeleton } from 'react-ui-kit';

export function GrantsStatsSkeleton() {
    return (
        <div className="w-full">
            <CardSkeleton />
        </div>
    );
}

function CardSkeleton() {
    return (
        <div className="flex w-full flex-col xs:flex-row justify-center items-center gap-6">
            <div className="w-full h-full ">
                <Skeleton height="h-[180px] !rounded-3xl" />
            </div>
            <div className="w-full h-full ">
                <Skeleton height="h-[180px] !rounded-3xl" />
            </div>
            <div className="w-full h-full ">
                <Skeleton height="h-[180px] !rounded-3xl" />
            </div>
            <div className="w-full h-full  hidden xs:flex">
                <Skeleton height="h-[180px] !rounded-3xl" />
            </div>
        </div>
    );
}
