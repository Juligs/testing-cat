import { Actions, CtaCard, TextLink } from 'react-ui-kit';
import { CONTACT_US_CTA_DEFAULT } from './contactUsCTAContent.constants';
import Link from 'next/link';

interface ContactUsCTAProps {
    ctaContent?: React.ComponentProps<typeof CtaCard> & {
        link: string;
    };
}

export function ContactUsCTA({ ctaContent }: ContactUsCTAProps) {
    const content = ctaContent ?? CONTACT_US_CTA_DEFAULT;

    return (
        <div className="container py-14 xs:py-20 lg:py-30 flex justify-center items-center w-full">
            <CtaCard {...content}>
                <Actions>
                    <Link
                        href={content.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Contact us"
                    >
                        <TextLink text="Email us" showIcon />
                    </Link>
                </Actions>
            </CtaCard>
        </div>
    );
}
