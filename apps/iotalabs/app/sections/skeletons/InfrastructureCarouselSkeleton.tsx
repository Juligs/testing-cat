import { Skeleton } from 'react-ui-kit';

export function InfrastructureCarouselSkeleton() {
    return (
        <div className="flex flex-col gap-12">
            <div className="w-full ">
                <ChipSkeleton />
            </div>
            <div className="h-full">
                <CardSkeleton />
            </div>
        </div>
    );
}

function CardSkeleton() {
    return (
        <div className="flex w-full items-center justify-start gap-6 overflow-hidden">
            <div className=" w-full h-full flex flex-col gap-4">
                <Skeleton width="w-full" height="h-[180px]" />
                <Skeleton width="w-full" height="h-[50px]" />
            </div>
            <div className=" w-full h-full gap-4 hidden xs:flex flex-col">
                <Skeleton width="w-full" height="h-[180px]" />
                <Skeleton width="w-full" height="h-[50px]" />
            </div>
            <div className=" w-full h-full  gap-4 hidden sm:flex flex-col">
                <Skeleton width="w-full" height="h-[180px]" />
                <Skeleton width="w-full" height="h-[50px]" />
            </div>
        </div>
    );
}

function ChipSkeleton() {
    const NUMBER_OF_LABELS = 3;
    return (
        <div className="flex items-center justify-start gap-2">
            {Array.from({ length: NUMBER_OF_LABELS }).map((_, index) => (
                <div className="chip overflow-hidden" key={index}>
                    <Skeleton width="w-[140px]" height="h-[37px]" />
                </div>
            ))}
        </div>
    );
}
