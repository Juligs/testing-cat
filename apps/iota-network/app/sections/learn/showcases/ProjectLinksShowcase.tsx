import Link from 'next/link';
import { TextLink } from 'react-ui-kit';
import { VisitWebsite, BlogPost, Download } from '@repo/icons';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { ShowcaseProject } from './showcasesProjects.enums';
import { SHOWCASES } from './constants/showcasesContent.constants';

interface ProjectLinksShowcaseProps extends BaseSectionProps {
    showcase: ShowcaseProject;
}

export function ProjectLinksShowcase({
    showcase,
    id,
    navbarColorScheme,
}: ProjectLinksShowcaseProps) {
    const page = SHOWCASES[showcase];
    const data = page?.projectLinks;
    if (!data) return null;

    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="flex flex-col gap-6 w-full ml-0 sm:ml-[56px]">
                <div className="flex flex-wrap sm:flex-col gap-4">
                    {data.website && (
                        <Link
                            href={data.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 group"
                        >
                            <TextLink
                                text="Website"
                                icon={<VisitWebsite />}
                                iconPosition={'left'}
                            />
                        </Link>
                    )}

                    {data.blog && (
                        <Link href={data.blog} target="_blank" rel="noopener noreferrer">
                            <TextLink
                                text="Read the blog post"
                                icon={<BlogPost />}
                                iconPosition={'left'}
                            />
                        </Link>
                    )}
                    {data.download && (
                        <Link
                            href={data.download}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 group"
                        >
                            <TextLink
                                text="Download presentation"
                                iconPosition="left"
                                icon={<Download />}
                            />
                        </Link>
                    )}
                </div>
                {data.contact && (
                    <div className="flex flex-col items-center md:items-start gap-2 bg-network-primary-90 py-4 pl-4 pr-6 rounded-lg max-w-full md:max-w-[286px]">
                        <p className="text-title-sm text-darkest"> Interested in the project? </p>
                        <Link href={data.contact}>
                            <TextLink text="Contact us" showIcon />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
