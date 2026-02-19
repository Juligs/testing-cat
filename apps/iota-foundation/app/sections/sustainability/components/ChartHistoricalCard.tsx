import { ReactNode } from 'react';

interface ChartHistoricalCardProps {
    icon: ReactNode;
    title: string;
    footer: string;
    children: ReactNode;
}

export function ChartHistoricalCard({ icon, title, footer, children }: ChartHistoricalCardProps) {
    return (
        <div className="flex flex-col shadow-[0_2px_8px_2px_rgba(0,0,0,0.08)] pb-6 rounded-3xl gap-8">
            <div className="flex items-center gap-4 p-6 border-b border-transparency-black-16">
                <div className="bg-iota-neutral-96 rounded-xl p-3">{icon}</div>
                <p className="text-darkest text-title-md">{title}</p>
            </div>

            <div className="flex-1 min-h-[250px] px-6">{children}</div>

            <p className="text-iota-neutral-40 text-label-sm flex items-center justify-center">
                {footer}
            </p>
        </div>
    );
}
