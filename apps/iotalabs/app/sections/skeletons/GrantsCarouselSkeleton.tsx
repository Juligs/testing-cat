import { Skeleton } from 'react-ui-kit';

export function GrantsCarouselSkeleton() {
    return (
        <div className="w-full">
            <CardSkeleton />
        </div>
    );
}

function CardSkeleton() {
    return (
        <div className="flex w-full items-center  gap-4 overflow-hidden">
            <div className="w-full h-full flex flex-col gap-8 rounded-lg">
                <Skeleton height="h-[216px]" />
                <Skeleton height="h-[150px]" />
            </div>
            <div className="w-full h-full gap-8 hidden xs:flex flex-col">
                <Skeleton height="h-[216px]" />
                <Skeleton height="h-[150px]" />
            </div>
            <div className="w-full h-full gap-8 hidden md:flex flex-col">
                <Skeleton height="h-[216px]" />
                <Skeleton height="h-[150px]" />
            </div>
        </div>
    );
}
