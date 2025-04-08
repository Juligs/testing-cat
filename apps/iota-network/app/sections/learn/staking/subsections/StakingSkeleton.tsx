import { DisplayStatsSkeleton } from '@repo/shared/components';

export function StakingSkeleton() {
    return (
        <div className="flex flex-col gap-6">
            <div className="w-full ">
                <div className="grid grid-cols-3">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <DisplayStatsSkeleton key={index} />
                    ))}
                </div>
            </div>
            <div className="h-full">
                <div className="grid grid-cols-4">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <DisplayStatsSkeleton key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
