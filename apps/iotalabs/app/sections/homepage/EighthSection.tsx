import { VerticalTitle, VerticalTitleTextSize } from 'react-ui-kit';
import { TwoColumnsImageTemplate } from '@components';
import { InfraSlider } from '@sections/subsections';
import { fetchDataInfraSlider } from '@lib/airtable';

export async function EighthSection({ id }: { id: string }) {
    const dataInfraSlider = await fetchDataInfraSlider();
    return (
        <section className="w-full bg-labs-neutral-100" id={id}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/homepage/eighth-section.svg">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle
                            title="IOTA Infrastructure"
                            subtitle="Powering DeFi with trusted providers"
                            body="At IOTA, every tool and service provider plays a vital role in enabling a seamless experience for both builders and users. Our carefully selected third-party infrastructure providers act as the essential elements to enhance your IOTA experience."
                            size={VerticalTitleTextSize.Small}
                        />
                    </div>
                </TwoColumnsImageTemplate>
                <div className="flex flex-col gap-12">
                    <InfraSlider data={dataInfraSlider} />
                </div>
            </div>
        </section>
    );
}
