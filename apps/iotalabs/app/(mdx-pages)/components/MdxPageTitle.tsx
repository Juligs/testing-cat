'use client';

import { usePathname } from 'next/navigation';
import { VerticalTitle, VerticalTitleTextSize } from 'react-ui-kit';

enum LegalRoutes {
    PrivacyPolicy = 'Privacy Policy',
    TermsOfUse = 'Terms of Use',
}

const routeTitles: Record<string, string> = {
    '/privacy-policy': LegalRoutes.PrivacyPolicy,
    '/terms-of-use': LegalRoutes.TermsOfUse,
};

export function MdxPageTitle(): React.JSX.Element {
    const currentPath = usePathname();
    const title = routeTitles[currentPath];
    return <VerticalTitle inverted isCentered size={VerticalTitleTextSize.Large} title={title} />;
}
