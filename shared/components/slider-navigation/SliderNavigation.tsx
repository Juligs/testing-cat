import { Button, ButtonVariant } from 'react-ui-kit';
import { LineArrowSmall } from '@repo/icons';
import clsx from 'clsx';

interface SliderNavigationProps {
    onPrev: () => void;
    onNext: () => void;
    isPrevDisabled: boolean;
    isNextDisabled: boolean;
    id: string;
    inverted?: boolean;
}

export function SliderNavigation({
    onPrev,
    onNext,
    isPrevDisabled,
    isNextDisabled,
    id,
    inverted = false,
}: SliderNavigationProps) {
    return (
        <div className="flex gap-8 items-center justify-center w-full px-8 overflow-hidden">
            <Button
                onClick={onPrev}
                variant={ButtonVariant.Ghost}
                icon={
                    <LineArrowSmall
                        className={clsx('rotate-180', {
                            'text-darkest-inverted': inverted,
                            'text-darkest': !inverted,
                        })}
                    />
                }
                ariaLabel="Previous"
                disabled={isPrevDisabled}
            />
            <div
                id={id}
                className={clsx(
                    'swiper-pagination-custom flex items-center justify-center cursor-pointer max-w-max',
                    { 'swiper-pagination-inverted': inverted },
                )}
            />
            <Button
                onClick={onNext}
                icon={
                    <LineArrowSmall
                        className={clsx({
                            'text-darkest-inverted': inverted,
                            'text-darkest': !inverted,
                        })}
                    />
                }
                variant={ButtonVariant.Ghost}
                disabled={isNextDisabled}
                ariaLabel="Next"
            />
        </div>
    );
}
