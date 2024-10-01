import { DecoratedCorner } from './DecoratedCorner';
import clsx from 'clsx';

interface DecoratedBoxProps {
    topCornerFill?: string;
    bottomCornerFill?: string;
}

export function DecoratedBox({
    topCornerFill,
    bottomCornerFill,
    children,
}: React.PropsWithChildren<DecoratedBoxProps>) {
    return (
        <div className="relative overflow-hidden">
            {topCornerFill && (
                <DecoratedCorner
                    className={clsx(
                        'absolute top-0 right-0 md:-right-0.5 decorated-corner-size',
                        topCornerFill,
                    )}
                />
            )}

            {children}

            {bottomCornerFill && (
                <DecoratedCorner
                    className={clsx(
                        'absolute -bottom-[1px] left-0 rotate-180 decorated-corner-size',
                        bottomCornerFill,
                    )}
                />
            )}
        </div>
    );
}
