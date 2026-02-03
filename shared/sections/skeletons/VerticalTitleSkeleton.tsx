import { Skeleton } from 'react-ui-kit';

export function VerticalTitleSkeleton() {
    return (
        <div className=" w-full h-full flex flex-col gap-12">
            <Skeleton width="w-full" height="h-[250px] md:h-[300px] !rounded-4xl" />
            <Skeleton width="w-full" height="h-[150px] md:h-[200px]" />
        </div>
    );
}
