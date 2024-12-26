import { Skeleton } from 'react-ui-kit';

export function SliderImageCardSkeleton() {
    return (
        <div className="flex w-full items-center justify-start gap-6 overflow-hidden">
            <div className=" w-full h-full flex flex-col gap-4">
                <Skeleton height="h-[216px]" />
                <Skeleton height="h-[150px]" />
            </div>
            <div className=" w-full h-full gap-4 hidden xs:flex flex-col">
                <Skeleton height="h-[216px]" />
                <Skeleton height="h-[150px]" />
            </div>
            <div className=" w-full h-full  gap-4 hidden sm:flex flex-col">
                <Skeleton height="h-[216px]" />
                <Skeleton height="h-[150px]" />
            </div>
        </div>
    );
}
