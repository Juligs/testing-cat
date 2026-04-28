import { PapersSkeleton } from '@components';
import { Skeleton } from 'react-ui-kit';

export function WorkshopSkeleton() {
    return (
        <div className="container flex flex-col items-center w-full">
            <div className="py-14 xs:py-20 lg:py-30 w-full">
                <div className="grid grid-cols-1 xs:grid-cols-3 gap-6">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div className="overflow-hidden rounded-3xl" key={index}>
                            <Skeleton height="h-[240px]" width="max-w-[708px]" />
                        </div>
                    ))}
                </div>
            </div>
            <div className=" py-14 xs:py-20 lg:py-30 flex flex-col gap-6 xs:gap-14 sm:gap-20 lg:gap-30 items-center">
                <Skeleton height="h-[81px]" width="w-[600px]" />
                <div className="flex flex-row justify-between">
                    <Skeleton height="h-[211px]" width="w-[600px]" />
                    <Skeleton height="h-[211px]" width="w-[600px]" />
                </div>
                <div className="w-full">
                    <PapersSkeleton count={6} />
                </div>
            </div>
        </div>
    );
}
