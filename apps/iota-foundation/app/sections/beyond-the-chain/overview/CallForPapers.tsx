import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, TitleTextSize, VerticalTitle } from 'react-ui-kit';
import { CALL_PAPERS_TITLE_CONTENT } from './constants';
import Link from 'next/link';
import { ArrowTopRight } from '@repo/icons';

export function CallForPapers({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-labs-neutral-100"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/beyond-the-chain/overview/call_papers.png">
                    <div className="text-center max-w-[504px]">
                        <VerticalTitle
                            title={CALL_PAPERS_TITLE_CONTENT.title}
                            size={TitleTextSize.Small}
                            body={
                                Array.isArray(CALL_PAPERS_TITLE_CONTENT.body)
                                    ? CALL_PAPERS_TITLE_CONTENT.body.map((line, index) => (
                                          <p className="mb-4" key={index}>
                                              {line}
                                          </p>
                                      ))
                                    : CALL_PAPERS_TITLE_CONTENT.body
                            }
                            subtitle={CALL_PAPERS_TITLE_CONTENT.subtitle}
                        >
                            <Actions>
                                <Link
                                    href="https://edas.info/login.php?rurl=aHR0cHM6Ly9lZGFzLmluZm8vTjMzNDczP2M9MzM0NzM%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button icon={<ArrowTopRight />} text="Submit Paper" disabled />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
            </div>
        </section>
    );
}
