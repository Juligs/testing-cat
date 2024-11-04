import { INVERTED_SECONDARY_TEXT_COLOR, SECONDARY_TEXT_COLOR } from '../title.constants';
import clsx from 'clsx';

interface OverlineProps {
    /*
     * Whether the overline should be inverted
     */
    inverted?: boolean;
}

export function Overline({ children, inverted }: React.PropsWithChildren<OverlineProps>) {
    const textColor = inverted ? INVERTED_SECONDARY_TEXT_COLOR : SECONDARY_TEXT_COLOR;
    return <span className={clsx('text-title-sm', textColor)}>{children}</span>;
}
