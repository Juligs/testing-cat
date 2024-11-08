import { Button, ButtonVariant } from 'react-ui-kit';
import { LineArrowSmall } from '@repo/icons';

interface SliderNavigationProps {
    onPrev: () => void;
    onNext: () => void;
    isPrevDisabled: boolean;
    isNextDisabled: boolean;
}

export function SliderNavigation({
    onPrev,
    onNext,
    isPrevDisabled,
    isNextDisabled,
}: SliderNavigationProps) {
    return (
        <div className="flex gap-8 items-center justify-center w-full px-8 overflow-hidden">
            <Button
                onClick={onPrev}
                variant={ButtonVariant.Ghost}
                icon={<LineArrowSmall className="rotate-180" />}
                disabled={isPrevDisabled}
            />
            <div
                id="swiper-pagination-custom"
                className="flex items-center justify-center cursor-pointer max-w-max"
            />
            <Button
                onClick={onNext}
                icon={<LineArrowSmall />}
                variant={ButtonVariant.Ghost}
                disabled={isNextDisabled}
            />
        </div>
    );
}
