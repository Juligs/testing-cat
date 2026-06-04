import Link from 'next/link';
import { TextLink } from 'react-ui-kit';

interface FooterProps {
    locale: string;
}

const FOOTER_LINKS = [
    { label: 'Overview', anchor: '' },
    { label: 'Pilots', anchor: '#pilots' },
    { label: 'Crowdin', anchor: '#crowdin' },
];

export function Footer({ locale }: FooterProps) {
    return (
        <footer className="border-t border-transparency-black-8">
            <div className="container py-10 xs:py-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-2">
                    <p className="text-title-xs text-darkest">TWIN</p>
                    <p className="text-body-sm text-medium max-w-[540px]">
                        Standalone multi-language and multi-region test app, using next-intl for
                        translations and a separate region model for market adaptation.
                    </p>
                </div>
                <div className="flex flex-wrap gap-5">
                    {FOOTER_LINKS.map((link) => (
                        <Link key={link.label} href={`/${locale}${link.anchor}`} aria-label={link.label}>
                            <TextLink text={link.label} underline />
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
