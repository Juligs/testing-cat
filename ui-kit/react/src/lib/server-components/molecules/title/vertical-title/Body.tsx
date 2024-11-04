import { INVERTED_SECONDARY_TEXT_COLOR, SECONDARY_TEXT_COLOR } from '../title.constants';
import clsx from 'clsx';

interface BodyProps {
    /*
     * Whether the body should be inverted
     */
    inverted?: boolean;
    /*
     * The body content is centered
     */
    isCentered?: boolean;
}

export function Body({ children, inverted, isCentered }: React.PropsWithChildren<BodyProps>) {
    const textColor = inverted ? INVERTED_SECONDARY_TEXT_COLOR : SECONDARY_TEXT_COLOR;

    return (
        <div
            className={clsx('text-body-lg body-text-padding', textColor, {
                'pr-4 md:pr-16 lg:pr-18 xl:pr-20': !isCentered,
            })}
        >
            {children}
        </div>
    );
}
