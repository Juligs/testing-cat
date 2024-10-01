'use client';
import { usePathname } from 'next/navigation';
import {
    Hero as HeroComponent,
    HeroBackgroundImage,
    VerticalTitle,
    VerticalTitleTextSize,
} from 'react-ui-kit';

enum LegalRoutes {
    PrivacyPolicy = 'Privacy Policy',
    TermsOfUse = 'Terms of Use',
}

const routeTitles: Record<string, string> = {
    '/privacy-policy': LegalRoutes.PrivacyPolicy,
    '/terms-of-use': LegalRoutes.TermsOfUse,
};

export default function Layout({ children }: React.PropsWithChildren) {
    const currentPath = usePathname();
    const title = routeTitles[currentPath];
    return (
        <>
            <section id="hero-inverted" className="h-full">
                <HeroComponent>
                    <HeroBackgroundImage src="/hero-legal.png" />
                    <div className="xl:w-3/4">
                        <VerticalTitle
                            inverted
                            isCentered
                            size={VerticalTitleTextSize.Large}
                            title={title}
                        />
                    </div>
                </HeroComponent>
            </section>
            <section className="flex flex-col w-full justify-center items-center py-30" id="legal">
                <div className="flex container flex-col">{children}</div>
            </section>
        </>
    );
}
