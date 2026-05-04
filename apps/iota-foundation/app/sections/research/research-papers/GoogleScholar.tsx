import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, VerticalTitle } from 'react-ui-kit';
import { GOOGLE_SCHOLAR_TITLE_CONTENT } from './constants';
import Link from 'next/link';

export function GoogleScholar({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/research/research-papers/google_scholar.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...GOOGLE_SCHOLAR_TITLE_CONTENT}>
                            <Actions>
                                <Link
                                    href={GOOGLE_SCHOLAR_TITLE_CONTENT.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Go to the Google Scholar Foundation page"
                                >
                                    <Button text={GOOGLE_SCHOLAR_TITLE_CONTENT.text} icon />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
            </div>
        </section>
    );
}
