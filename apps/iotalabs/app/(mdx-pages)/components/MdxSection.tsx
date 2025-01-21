import { BaseSectionProps } from '@repo/shared/interfaces';

export function MdxSection({
    children,
    id = 'legal',
    theme,
}: React.PropsWithChildren<BaseSectionProps>): React.JSX.Element {
    return (
        <section
            className="flex flex-col w-full justify-center items-center py-30"
            id={id}
            data-theme={theme}
        >
            <div className="flex container flex-col">
                <div className="flex flex-col prose prose-labs max-w-none">{children}</div>
            </div>
        </section>
    );
}
