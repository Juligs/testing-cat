import { INVERTED_SECONDARY_TEXT_COLOR, SECONDARY_TEXT_COLOR } from './verticalTitle.constants';
import clsx from 'clsx';

interface BodyProps {
    /*
     * Whether the body should be inverted
     */
    inverted?: boolean;
}

export function Body({ children, inverted }: React.PropsWithChildren<BodyProps>) {
    const textColor = inverted ? INVERTED_SECONDARY_TEXT_COLOR : SECONDARY_TEXT_COLOR;

    return (
        <div
            className={clsx(
                'text-body-lg pr-4 md:pr-16 lg:pr-18 xl:pr-20 body-text-padding',
                textColor,
            )}
        >
            {children}
        </div>
    );
}
