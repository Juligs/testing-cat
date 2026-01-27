import { Skeleton } from 'react-ui-kit';

export function BlogPostCardSkeleton() {
    return (
        <div className="container container flex flex-col gap-6 xs:gap-10 sm:gap-20 overflow-hidden py-14 xs:py-20 lg:py-30">
            <div className="flex flex-col gap-y-6">
                <Skeleton width="w-[250px]" height="h-[50px]" />
                <Skeleton width="w-[100px]" height="h-[20px]" />
            </div>
            <div className="grid grid-cols-1 gap-6 xs:grid-cols-2 md:grid-cols-3">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="flex flex-col gap-3">
                        <div className="rounded-2xl overflow-hidden">
                            <Skeleton width="w-full" height="h-[200px]" />
                        </div>
                        <div className="chip overflow-hidden">
                            <Skeleton width="w-[60px]" height="h-[20px]" />
                        </div>
                        <Skeleton width="w-full" height="h-[100px]" />
                    </div>
                ))}
            </div>
        </div>
    );
}
