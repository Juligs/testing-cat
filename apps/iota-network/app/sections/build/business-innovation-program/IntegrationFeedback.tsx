import { ArrowTopRight } from '@repo/icons';
import Link from 'next/link';
import { Button, ButtonVariant, HorizontalTitle, TitleTextSize } from 'react-ui-kit';
import { CONNECT_CTA_CONTENT, CONTRIBUTE_SMALL_CARD_CONTENT } from '../get-started/constants';
import { SmallCtaCard } from '@components/small-CTA-card/SmallCtaCard';

const FIRST_PARTICIPANTS_HORIZONTAL_TITLE: React.ComponentProps<typeof HorizontalTitle> = {
    title: 'Want to share integration feedback?',
    subtitle: 'Help us to improve by sharing your experience or contribute to the Ecosystem',
    size: TitleTextSize.Small,
};

interface IntegrationFeedbackProps {
    id: string;
    navbarColorScheme?: string;
}
export function IntegrationFeedback({ id, navbarColorScheme }: IntegrationFeedbackProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <HorizontalTitle {...FIRST_PARTICIPANTS_HORIZONTAL_TITLE}>
                    <Link
                        href="mailto:partnerships@iota.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Mail to partnerships"
                    >
                        <Button
                            text="Contact us"
                            icon={<ArrowTopRight />}
                            variant={ButtonVariant.Secondary}
                        />
                    </Link>
                </HorizontalTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
                    {[...CONNECT_CTA_CONTENT, ...CONTRIBUTE_SMALL_CARD_CONTENT].map(
                        (data, index) => (
                            <Link
                                className="[&>div]:h-full"
                                href={data.link}
                                key={index}
                                target={data.isExternal ? '_blank' : undefined}
                                rel={data.isExternal ? 'noopener noreferrer' : undefined}
                                aria-label={`Link to ${data.title}`}
                            >
                                <SmallCtaCard {...data} hasSmallTitle />
                            </Link>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
}
