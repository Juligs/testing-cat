import { Skeleton } from 'react-ui-kit';

export function IconContentSkeleton() {
    return (
        <div className="w-full h-full ">
            <Skeleton height="h-[290px] !rounded-3xl" />
        </div>
    );
}
