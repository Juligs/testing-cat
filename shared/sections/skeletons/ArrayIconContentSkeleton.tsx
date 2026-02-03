import { IconContentSkeleton } from '../../components';

export function ArrayIconContentSkeleton({ count = 4 }: { count?: number }) {
    return (
        <div className="w-full">
            <div className="flex w-full flex-col  justify-center items-center gap-12">
                {Array.from({ length: count }).map((_, i) => (
                    <IconContentSkeleton key={i} />
                ))}
            </div>
        </div>
    );
}
