'use client';

import { usePathname } from 'next/navigation';
import { VerticalTitle, TitleTextSize } from 'react-ui-kit';

enum LegalRoutes {
    PrivacyPolicy = 'Privacy Policy',
    TermsOfUse = 'Terms of Use',
    CookiePolicy = 'Cookie Policy',
    TermsOfUseTelegram = 'Welcome to the Official IOTA Telegram',
    TermsOfUseAmbassador = 'IOTA Ambassador Program Terms',
}

const routeTitles: Record<string, string> = {
    '/privacy-policy': LegalRoutes.PrivacyPolicy,
    '/terms-of-use': LegalRoutes.TermsOfUse,
    '/cookie-policy': LegalRoutes.CookiePolicy,
    '/terms-telegram': LegalRoutes.TermsOfUseTelegram,
    '/terms-ambassador': LegalRoutes.TermsOfUseAmbassador,
};

export function MdxPageTitle(): React.JSX.Element {
    const currentPath = usePathname();
    const title = routeTitles[currentPath];
    return <VerticalTitle inverted isCentered size={TitleTextSize.Large} title={title} />;
}
