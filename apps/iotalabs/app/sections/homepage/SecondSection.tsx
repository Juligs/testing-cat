import { DecoratedBox, TwoColumnsImageTemplate } from '@components';
import { VerticalTitle, VerticalTitleTextSize } from 'react-ui-kit';

const VERTICAL_TITLE_INFO = {
    title: 'The Engine Behind IOTA Adoption',
    overline: 'Discover iotalabs',
    subtitle: 'Join us as we shape the future of IOTA — one breakthrough at a time',
    body: 'Through grants, growth initiatives, builders support and a relentless focus on innovation and strategic partnerships, iotalabs is the catalyst for transforming potential into reality.',
};
export function SecondSection({ id }: { id: string }) {
    return (
        <DecoratedBox topCornerFill="text-labs-neutral-100">
            <section className="w-full bg-labs-primary-70" id={id}>
                <div className="container py-14 md:py-20 lg:py-30 flex justify-center text-center">
                    <TwoColumnsImageTemplate reverse image="/homepage/second-section.png">
                        <VerticalTitle
                            title={VERTICAL_TITLE_INFO.title}
                            overline={VERTICAL_TITLE_INFO.overline}
                            size={VerticalTitleTextSize.Small}
                            subtitle={VERTICAL_TITLE_INFO.subtitle}
                            body={VERTICAL_TITLE_INFO.body}
                        />
                    </TwoColumnsImageTemplate>
                </div>
            </section>
        </DecoratedBox>
    );
}
