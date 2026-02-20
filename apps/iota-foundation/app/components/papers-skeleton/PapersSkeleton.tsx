import { IconSkeleton } from '@repo/shared/components';

export function PapersSkeleton({ count = 9 }: { count?: number }) {
    return (
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: count }).map((_, index) => (
                <IconSkeleton key={index} />
            ))}
        </div>
    );
}
