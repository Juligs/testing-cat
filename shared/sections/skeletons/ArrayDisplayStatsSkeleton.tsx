import { DisplayStatsSkeleton } from '../../components';

export function ArrayDisplayStatsSkeleton({ count = 4 }: { count?: number }) {
    return (
        <div className="w-full">
            <div className="flex w-full flex-col xs:flex-row justify-center items-center gap-6">
                {Array.from({ length: count }).map((_, i) => (
                    <DisplayStatsSkeleton key={i} />
                ))}
            </div>
        </div>
    );
}
