import { SECONDARY_TEXT_COLOR, INVERTED_SECONDARY_TEXT_COLOR } from '../title.constants';
import { clsx } from 'clsx';

interface TitleProps {
    /*
     * Whether the title should be inverted
     */
    inverted?: boolean;
}

export function BodyHorizontal({ children, inverted }: React.PropsWithChildren<TitleProps>) {
    const bodyColor = inverted ? INVERTED_SECONDARY_TEXT_COLOR : SECONDARY_TEXT_COLOR;

    return <p className={clsx('text-body-lg', bodyColor)}>{children}</p>;
}
