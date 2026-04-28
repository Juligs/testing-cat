interface IconTextStackProps {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
}

export function VerticalTitleWithIcon({ title, subtitle, icon }: IconTextStackProps) {
    return (
        <div className="flex flex-col gap-4 items-center justify-center text-center">
            <div className="[&_svg]:h-8 [&_svg]:w-8 text-network-primary-30">{icon}</div>
            <div>
                <p className="text-title-sm text-darkest">{title}</p>
                <p className="text-body-md text-medium">{subtitle}</p>
            </div>
        </div>
    );
}
