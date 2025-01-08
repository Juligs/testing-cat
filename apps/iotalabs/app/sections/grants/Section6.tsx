import { TwoColumnsImageTemplate } from '@components';
import { ArrowTopRight } from '@repo/icons';
import {
    Button,
    VerticalTitle,
    TitleTextSize,
    Actions,
    ButtonVariant,
    ImageCard,
} from 'react-ui-kit';
import { TIERED_CARDS, TIERED_STATS } from '@lib/constants';
import { DisplayStats } from 'react-ui-kit';
import Link from 'next/link';
export function Section6({ id }: { id: string }) {
    return (
        <section className="bg-[#5FF45B]" id={id}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/grants/section6.svg">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle
                            title="Tiered Assessment Framework"
                            subtitle="Applications undergo assessment based on a tiered framework."
                            body="The amount of funding you ask for determines what hoops you'll need to jump through."
                            size={TitleTextSize.Medium}
                        >
                            <Actions>
                                <Link
                                    href="https://airtable.com/appQqzg74YoTqK3Ht/pagOgN5kxDmUOrIW7/form"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button
                                        text="Apply for your project"
                                        icon={<ArrowTopRight />}
                                        variant={ButtonVariant.Secondary}
                                    />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {TIERED_CARDS.map((card, cardIndex) => (
                        <div key={cardIndex} className="flex flex-col gap-6 w-full">
                            <div className="flex w-full gap-6">
                                <ImageCard
                                    title={card.title}
                                    subtitle={card.subtitle}
                                    body={card.body}
                                    inverted={true}
                                    isHoverable={false}
                                />
                            </div>
                            <div className="flex gap-6 w-full">
                                {TIERED_STATS.slice(cardIndex * 2, cardIndex * 2 + 2).map(
                                    (stat, statIndex) => (
                                        <DisplayStats
                                            key={statIndex}
                                            label={stat.label}
                                            value={stat.value}
                                            highlighted={stat.highlighted}
                                        />
                                    ),
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
