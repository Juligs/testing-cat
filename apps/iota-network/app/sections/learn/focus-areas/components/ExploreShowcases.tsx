import { TextLink } from 'react-ui-kit';

import { SmallCtaCard } from '@components/small-CTA-card/SmallCtaCard';
import Link from 'next/link';
import { ShowcaseProject } from '@sections/learn/showcases/showcasesProjects.enums';
import { SHOWCASES } from '@sections/learn/showcases/constants/showcasesContent.constants';

interface ExploreShowcasesProps {
    showcases: ShowcaseProject[];
}
export function ExploreShowcases({ showcases }: ExploreShowcasesProps): React.JSX.Element {
    const showcaseCards = showcases
        .filter((e) => e in SHOWCASES && SHOWCASES[e].card)
        .map((e) => ({
            ...SHOWCASES[e].card!,
            link: `/learn/showcases/${e}`,
        }));
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-row justify-between">
                <p className="text-label-md text-medium"> SHOWCASES </p>
                <Link href="/learn/showcases" aria-label="Link to show all showcases">
                    <TextLink text="Show all" showIcon />
                </Link>
            </div>
            <div className="gap-6 grid grid-cols-1 xs:grid-cols-2">
                {showcaseCards.map((item, index) => (
                    <Link
                        key={index}
                        href={item.link}
                        className="[&>div]:h-full"
                        aria-label={`Go to ${item.title}`}
                    >
                        <SmallCtaCard
                            title={item.title}
                            subtitle={item.subtitle}
                            image={item.image}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}
