import { BaseSectionProps } from '../../../interfaces';

export function MdxSection({
    children,
    id = 'legal',
    navbarColorScheme,
}: React.PropsWithChildren<BaseSectionProps>): React.JSX.Element {
    return (
        <section
            className="flex flex-col w-full justify-center items-center py-30"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="flex container flex-col">
                <div className="flex flex-col prose prose-labs max-w-none">{children}</div>
            </div>
        </section>
    );
}
