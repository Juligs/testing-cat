import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, HorizontalTitle, Image } from 'react-ui-kit';
import { OUR_PURPOSE_HORIZONTAL_TITLE } from './constants';
import Link from 'next/link';
import { ArrowTopRight } from '@repo/icons';

export function OurPurpose({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-6 xs:gap-14 sm:gap-20">
                <div className="w-full break-words whitespace-normal">
                    <HorizontalTitle {...OUR_PURPOSE_HORIZONTAL_TITLE}>
                        <Actions>
                            <Link href="/purpose" aria-label={'Link to purpose'}>
                                <Button text="Our Vision" icon={<ArrowTopRight />} />
                            </Link>
                        </Actions>
                    </HorizontalTitle>
                </div>

                <div className="w-full grid place-items-center">
                    <Image
                        src="/homepage/our-purpose/our_purpose.png"
                        alt="Our Purpose"
                        className="max-w-full max-h-full"
                    />
                </div>
            </div>
        </section>
    );
}
