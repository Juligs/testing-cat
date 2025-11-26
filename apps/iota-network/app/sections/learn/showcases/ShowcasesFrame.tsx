import Image from 'next/image';
import Link from 'next/link';
import { Badge, IconContent, TextLink, TitleTextSize, VerticalTitle } from 'react-ui-kit';
import { ProjectLinksShowcase } from './ProjectLinksShowcase';
import { ShowcaseProject } from './showcasesProjects.enums';
import { TestimonialShowcase } from './TestimonialShowcase';
import { SHOWCASES } from './constants/showcasesContent.constants';
import { SideMenu } from '@components';
import { getDynamicSideMenu } from '@lib/utils/getDynamicSideMenuShowcase';
interface ShowcasesFrameProps {
    showcase: ShowcaseProject;
}
export function ShowcasesFrame({ showcase }: ShowcasesFrameProps) {
    const page = SHOWCASES[showcase];
    const data = page?.frame;

    return (
        <section className="w-full pt-[20px] sm:pt-20">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-[1fr_2fr_1fr] gap-6 items-start py-20">
                <div className="hidden sm:block">
                    <SideMenu sections={getDynamicSideMenu()} />
                </div>
                <div className="flex flex-col gap-10 sm:gap-30">
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-row items-center gap-2">
                                {data.links.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        {item.link ? (
                                            <Link
                                                href={item.link}
                                                className="inline-flex items-center"
                                            >
                                                <TextLink {...item} />
                                            </Link>
                                        ) : (
                                            <TextLink {...item} />
                                        )}
                                        {i < data.links.length - 1 && (
                                            <span className="text-medium text-label-sm">/</span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <VerticalTitle
                                {...data.verticalTitle}
                                size={TitleTextSize.ExtraSmall}
                            />
                            <div className="flex gap-2 mt-4">
                                {data.category.map((props, i) => (
                                    <Badge key={i} {...props} />
                                ))}
                            </div>
                        </div>

                        <Image
                            src={data.heroImage}
                            alt={
                                typeof data.verticalTitle.title === 'string'
                                    ? data.verticalTitle.title
                                    : `Frame image for ${showcase}`
                            }
                            className="rounded-2xl w-full aspect-video"
                            width={708}
                            height={398}
                        />
                        <div className="block sm:hidden">
                            <ProjectLinksShowcase showcase={showcase} />
                        </div>
                    </div>

                    <VerticalTitle {...data.description} size={TitleTextSize.ExtraSmall} />

                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
                        {data.highlights.map((props, i) => (
                            <IconContent key={i} {...props} filled />
                        ))}
                    </div>

                    <TestimonialShowcase showcase={showcase} />
                </div>
                <div className="hidden sm:block">
                    <ProjectLinksShowcase showcase={showcase} />
                </div>
            </div>
        </section>
    );
}
