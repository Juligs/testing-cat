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
                        'absolute -top-[2px] right-[-2px] xl:-top-[4px] decorated-corner-size',
                        topCornerFill,
                    )}
                />
            )}

            {children}

            {bottomCornerFill && (
                <DecoratedCorner
                    className={clsx(
                        'absolute -bottom-[1px] xl:-bottom-[4px] left-0 rotate-180 decorated-corner-size',
                        bottomCornerFill,
                    )}
                />
            )}
        </div>
    );
}
