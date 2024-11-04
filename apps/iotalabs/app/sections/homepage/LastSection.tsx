import { TwoColumnsImageTemplate } from '@components';
import { Actions, Button, ButtonVariant, VerticalTitle, TitleTextSize } from 'react-ui-kit';
import { ArrowTopRight } from '@repo/icons';
import Link from 'next/link';

const VERTICAL_TITLE_INFO = {
    title: 'iotalabs News',
    body: 'Discover the latest developments in our ecosystem, including new partnerships, funding opportunities, and collaborative projects',
};

export function LastSection({ id }: { id: string }) {
    return (
        <section className="w-full bg-labs-neutral-100" id={id}>
            <div className="container py-14 xs:py-20 lg:py-30 flex justify-center text-center">
                <TwoColumnsImageTemplate image="/homepage/last-section.svg">
                    <div className="sm:pr-[116px] lg:pr-[126px] xl:max-w-xl">
                        <VerticalTitle
                            title={VERTICAL_TITLE_INFO.title}
                            size={TitleTextSize.Small}
                            body={VERTICAL_TITLE_INFO.body}
                        >
                            <Actions>
                                <Link
                                    href="https://blog.iotalabs.io/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button
                                        variant={ButtonVariant.Primary}
                                        text="Blog posts"
                                        icon={<ArrowTopRight />}
                                    />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
            </div>
        </section>
    );
}
