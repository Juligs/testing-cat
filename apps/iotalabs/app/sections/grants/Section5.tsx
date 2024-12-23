import { TwoColumnsImageTemplate, DecoratedBox } from '@components';
import { ArrowTopRight } from '@repo/icons';
import {
    HorizontalTitle,
    IconContent,
    Button,
    VerticalTitle,
    TitleTextSize,
    ImageCard,
    Actions,
} from 'react-ui-kit';
import {
    FUNDING_GUIDELINES_DATA,
    APLICCATION_PROCESS_DATA,
} from '@lib/constants/ourFundingGuidelinesData.contants';

export function Section5({ id }: { id: string }) {
    return (
        <DecoratedBox topCornerFill="text-labs-primary-100" bottomCornerFill="text-[#5FF45B]">
            <section className="w-full bg-labs-neutral-4" id={id}>
                <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                    <div className="w-full">
                        <HorizontalTitle
                            size={TitleTextSize.Medium}
                            title="Our Funding Guidelines"
                            subtitle="Making sure our grants hit the right targets for maximum impact"
                            inverted
                        >
                            <Actions>
                                <Button text="Apply for a Grant" icon={<ArrowTopRight />} />
                            </Actions>
                        </HorizontalTitle>
                    </div>
                    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6">
                        {FUNDING_GUIDELINES_DATA.map((data, index) => (
                            <IconContent
                                icon={data.icon}
                                title={data.title}
                                body={data.body}
                                filled
                                inverted
                                key={index}
                            />
                        ))}
                    </div>
                    <TwoColumnsImageTemplate image="/grants/section5.svg">
                        <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                            <VerticalTitle
                                title="Evaluation of Applications"
                                subtitle="The cumulative score of your application depends on the votes cast by committee members. Take a glance at a sample vote for reference"
                                size={TitleTextSize.Small}
                                inverted
                            ></VerticalTitle>
                        </div>
                    </TwoColumnsImageTemplate>
                    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6">
                        {APLICCATION_PROCESS_DATA.map((data, index) => (
                            <ImageCard
                                title={data.title}
                                body={data.body}
                                inverted
                                isHoverable={false}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </DecoratedBox>
    );
}
