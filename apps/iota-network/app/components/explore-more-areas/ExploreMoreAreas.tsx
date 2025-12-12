import { ContactUsWithIcons } from '@components/contact-us-with-icons';
import { Discord, Telegram, XSocialIcon } from '@repo/icons';
import Link from 'next/link';
import { ExploreCard } from 'react-ui-kit';

interface ExploreMoreAreasProps {
    content: (React.ComponentProps<typeof ExploreCard> & {
        link: string;
        isExternal?: boolean;
    })[];
}

export function ExploreMoreAreas({ content }: React.PropsWithChildren<ExploreMoreAreasProps>) {
    return (
        <div className="container grid gap-6 grid-cols-1 md:grid-cols-2 py-14 xs:py-20 lg:py-30">
            <ContactUsWithIcons
                title="Any questions? We're here to help"
                overline="Contact Us"
                image="/shared/explore_more_areas.png"
                icons={[
                    { icon: <Discord />, url: 'https://discord.iota.org' },
                    { icon: <Telegram />, url: 'https://t.me/IOTA_Official_Community' },
                    { icon: <XSocialIcon />, url: 'https://x.com/iota' },
                ]}
            />
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
                {content.map((data, index) => (
                    <Link
                        href={data.link}
                        key={index}
                        target={data.isExternal ? '_blank' : '_self'}
                        rel={data.isExternal ? 'noopener noreferrer' : undefined}
                        className="[&>div]:h-full"
                        aria-label="Explore more"
                    >
                        <ExploreCard
                            key={index}
                            title={data.title}
                            subtitle={data.subtitle}
                            overline="Explore"
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}
