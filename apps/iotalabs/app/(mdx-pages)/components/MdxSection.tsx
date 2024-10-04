interface MdxSectionProps {
    id?: string;
}

export function MdxSection({
    children,
    id = 'legal',
}: React.PropsWithChildren<MdxSectionProps>): React.JSX.Element {
    return (
        <section className="flex flex-col w-full justify-center items-center py-30" id={id}>
            <div className="flex container flex-col">
                <div className="flex flex-col prose prose-labs max-w-none">{children}</div>
            </div>
        </section>
    );
}
