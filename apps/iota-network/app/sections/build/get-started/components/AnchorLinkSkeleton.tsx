import { Skeleton } from 'react-ui-kit';

export function AnchorLinkSkeleton() {
    return (
        <div className="w-full h-full">
            <Skeleton height="h-[62px]" />
        </div>
    );
}

export function ArrayAnchorLinkSkeleton({ count = 4 }: { count?: number }) {
    return (
        <div className="w-full">
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6">
                {Array.from({ length: count }).map((_, i) => (
                    <AnchorLinkSkeleton key={i} />
                ))}
            </div>
        </div>
    );
}
