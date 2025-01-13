import { ChipSkeleton, ImageCardSkeleton } from '@components';

export function ProjectsSkeleton() {
    return (
        <div className="flex flex-col gap-12">
            <div className="w-full ">
                <div className="flex flex-wrap items-center justify-start gap-2">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="chip overflow-hidden">
                            <ChipSkeleton />
                        </div>
                    ))}
                </div>
            </div>
            <div className="h-full">
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <ImageCardSkeleton key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
