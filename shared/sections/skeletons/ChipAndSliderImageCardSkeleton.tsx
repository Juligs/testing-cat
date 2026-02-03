import { ChipSkeleton, SliderImageCardSkeleton } from '../../components';

export function ChipsCarouselSkeleton({ chipCount = 3 }: { chipCount?: number }) {
    return (
        <div className="flex flex-col gap-12">
            <div className="w-full">
                <div className="flex items-center justify-start gap-2">
                    {Array.from({ length: chipCount }).map((_, index) => (
                        <ChipSkeleton key={index} />
                    ))}
                </div>
            </div>
            <div className="h-full">
                <SliderImageCardSkeleton />
            </div>
        </div>
    );
}
