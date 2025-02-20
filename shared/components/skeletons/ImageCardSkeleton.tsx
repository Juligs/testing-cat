import { Skeleton } from 'react-ui-kit';

export function ImageCardSkeleton() {
    return (
        <div className=" w-full h-full flex flex-col gap-4">
            <Skeleton width="w-full" height="h-[200px]" />
            <Skeleton width="w-full" height="h-[100]" />
        </div>
    );
}
