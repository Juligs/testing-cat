import { Skeleton } from 'react-ui-kit';

export function IconSkeleton() {
    return (
        <div className="w-full h-full ">
            <Skeleton height="h-[224px] !rounded-3xl" />
        </div>
    );
}
