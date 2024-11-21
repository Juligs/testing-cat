import { DecoratedBox, TwoColumnsImageTemplate } from '@components';
import { VerticalTitle, TitleTextSize } from 'react-ui-kit';

const VERTICAL_TITLE_INFO = {
    title: 'The Engine Behind IOTA Adoption',
    overline: 'Discover iotalabs',
    subtitle: 'Join us as we shape the future of IOTA — one breakthrough at a time',
    body: 'Through grants, growth initiatives, builders support and a relentless focus on innovation and strategic partnerships, iotalabs is the catalyst for transforming potential into reality. <a target="_blank" rel="noopener noreferrer" href="https://blog.iotalabs.io/discover-iotalabs/" class="underline">Read more</a>',
};
export function Section2({ id }: { id: string }) {
    return (
        <DecoratedBox topCornerFill="text-labs-neutral-100">
            <section className="w-full bg-labs-primary-70" id={id}>
                <div className="container py-14 sm:py-20 lg:py-30 flex justify-center text-center">
                    <TwoColumnsImageTemplate reverse image="/homepage/section2.svg">
                        <div className="sm:pl-[92px] lg:pl-[102px] xl:pl-[122px]">
                            <VerticalTitle
                                title={VERTICAL_TITLE_INFO.title}
                                overline={VERTICAL_TITLE_INFO.overline}
                                size={TitleTextSize.Small}
                                subtitle={VERTICAL_TITLE_INFO.subtitle}
                                body={
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: VERTICAL_TITLE_INFO.body,
                                        }}
                                    />
                                }
                            />
                        </div>
                    </TwoColumnsImageTemplate>
                </div>
            </section>
        </DecoratedBox>
    );
}
