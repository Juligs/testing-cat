import clsx from 'clsx';

interface SeparatorProps {
    borderColor?: string;
}

export function Separator({ borderColor }: SeparatorProps) {
    return (
        <div className={clsx('w-full border-t', borderColor ?? 'border-transparency-black-16')} />
    );
}
