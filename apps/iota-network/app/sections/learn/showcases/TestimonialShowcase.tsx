import { Quotes } from '@repo/icons';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Image from 'next/image';
import { ShowcaseProject } from './showcasesProjects.enums';
import { SHOWCASES } from './constants/showcasesContent.constants';

interface TestimonialShowcaseProps extends BaseSectionProps {
    showcase: ShowcaseProject;
}
export function TestimonialShowcase({ showcase, id, navbarColorScheme }: TestimonialShowcaseProps) {
    const page = SHOWCASES[showcase];
    if (!page?.testimonial) return null;

    const data = page.testimonial;

    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="max-w-[618px]">
                <div className="flex flex-col gap-10 items-center text-center max-w-3xl mx-auto">
                    <div className="flex flex-col gap-6 items-center">
                        <Quotes className="w-16 h-16 color-icon-content" />
                        <p className="text-title-md font-semibold">{data.content}</p>
                    </div>

                    <div className="flex items-center gap-x-6">
                        {data.image && (
                            <Image
                                src={data.image}
                                alt={data.name}
                                width={64}
                                height={64}
                                className="rounded-full object-cover"
                            />
                        )}
                        <div className="flex flex-col items-start text-left">
                            <span className="text-label-lg">{data.name}</span>
                            <p className="text-body-md text-iota-neutral-30">
                                {data.supportingText}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
