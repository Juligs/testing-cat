import { DisplayStatsSkeleton } from '../../components';

export function GrantsStatsSkeleton() {
    return (
        <div className="w-full">
            <div className="flex w-full flex-col xs:flex-row justify-center items-center gap-6">
                {Array.from({ length: 4 }).map((_, i) => (
                    <DisplayStatsSkeleton key={i} />
                ))}
            </div>
        </div>
    );
}
