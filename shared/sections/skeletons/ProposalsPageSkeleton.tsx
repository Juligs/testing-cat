import { ArrayDisplayStatsSkeleton } from '../../sections';
import { ArrayIconContentSkeleton } from './ArrayIconContentSkeleton';
import { VerticalTitleSkeleton } from './VerticalTitleSkeleton';

export function ProposalsPageSkeleton({ chipCount = 3 }: { chipCount?: number }) {
    return (
        <div className="container py-20 xs:py-30 ">
            <div className="w-full max-w-[708px] mx-auto">
                <div className="flex flex-col gap-12">
                    <VerticalTitleSkeleton />
                    <ArrayDisplayStatsSkeleton count={3} />
                    <ArrayIconContentSkeleton />
                </div>
            </div>
        </div>
    );
}
