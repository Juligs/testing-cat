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
        <div className="relative">
            {topCornerFill && (
                <DecoratedCorner
                    className={clsx('absolute top-0 right-0 decorated-corner-size', topCornerFill)}
                />
            )}

            {children}

            {bottomCornerFill && (
                <DecoratedCorner
                    className={clsx(
                        'absolute bottom-0 left-0 rotate-180 decorated-corner-size',
                        bottomCornerFill,
                    )}
                />
            )}
        </div>
    );
}
