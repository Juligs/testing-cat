import { IconSkeleton } from '@repo/shared/components';

export function CareersSkeleton() {
    return (
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, index) => (
                <IconSkeleton key={index} />
            ))}
        </div>
    );
}
