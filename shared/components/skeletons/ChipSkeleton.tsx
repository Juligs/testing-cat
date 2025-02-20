import { Skeleton } from 'react-ui-kit';

export function ChipSkeleton() {
    return (
        <div className="chip overflow-hidden">
            <Skeleton width="w-[140px]" height="h-[37px]" />
        </div>
    );
}
