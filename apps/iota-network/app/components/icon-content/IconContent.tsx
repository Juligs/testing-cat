import clsx from 'clsx';

export interface IconContentProps {
    icon: React.ReactNode;
    body: string;
    transparent?: boolean;
}

export function IconContent({ icon, body, transparent }: IconContentProps): React.JSX.Element {
    const bgIconColor = transparent ? 'bg-iota-neutral-96' : 'bg-network-primary-80';
    return (
        <div className="flex flex-row items-start gap-3 py-xs ml-2">
            <span
                className={clsx(
                    'flex items-center justify-center rounded-lg [&_svg]:h-6 [&_svg]:w-6 text-iota-neutral-10 p-2 ',
                    bgIconColor,
                )}
            >
                {icon}
            </span>
            <span className="text-body-lg text-medium">{body}</span>
        </div>
    );
}
