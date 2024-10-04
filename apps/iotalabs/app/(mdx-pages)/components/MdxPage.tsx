import { MdxPageHero, MdxSection } from './';

export function MdxPage({ children }: React.PropsWithChildren): React.JSX.Element {
    return (
        <>
            <MdxPageHero />
            <MdxSection>{children}</MdxSection>
        </>
    );
}
