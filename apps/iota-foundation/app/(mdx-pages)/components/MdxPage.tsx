import { MdxSection } from '@repo/shared/components';

export function MdxPage({ children }: React.PropsWithChildren): React.JSX.Element {
    return (
        <>
            <MdxSection>{children}</MdxSection>
        </>
    );
}
