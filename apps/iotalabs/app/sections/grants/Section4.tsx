import { TwoColumnsImageTemplate } from '@repo/shared';
import { IconContent, VerticalTitle, TitleTextSize } from 'react-ui-kit';
import { HOW_TO_APPLY_DATA } from '@lib/constants';

export function Section4({ id }: { id: string }) {
    return (
        <section className="w-full bg-labs-neutral-100" id={id}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/grants/section4.svg">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle
                            title="How to Apply"
                            subtitle="Applying for a grant is simple. Here's what to expect"
                            size={TitleTextSize.Medium}
                        ></VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
                <div className="flex flex-col xs:flex-row xs:flex-wrap sm:flex-nowrap gap-4 h-full justify-center xs:justify-start">
                    {HOW_TO_APPLY_DATA.map((data, index) => (
                        <div key={index} className="flex w-full xs:w-[calc(50%-1rem)] sm:w-full">
                            <IconContent
                                icon={data.icon}
                                title={data.title}
                                body={data.body}
                                filled
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
