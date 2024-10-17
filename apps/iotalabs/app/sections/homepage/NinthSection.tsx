import { TwoColumnsImageTemplate } from '@components';
import { Actions, Button, ButtonVariant, VerticalTitle, VerticalTitleTextSize } from 'react-ui-kit';
import { ArrowTopRight } from '@repo/icons';
import Link from 'next/link';
// import { Banner } from '@components/banner';

const VERTICAL_TITLE_INFO = {
    title: 'Build with iotalabs',
    body: 'Connecting innovate Web3 minds and builders with a prime support network for building your decentralized innovations.',
};
// const BANNER_INFO = {
//     title: 'Are you building on IOTA?',
//     subtitle: 'Register your application and get featured on iotalabs and the official website',
// };
export function NinthSection({ id }: { id: string }) {
    return (
        <section className="w-full bg-labs-neutral-100" id={id}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col justify-center text-center gap-y-14 xs:gap-y-20 lg:gap-y-30">
                <TwoColumnsImageTemplate reverse image="/homepage/ninth-section.svg">
                    <div className="sm:pl-[92px] lg:pl-[102px] xl:pl-[122px]">
                        <VerticalTitle
                            title={VERTICAL_TITLE_INFO.title}
                            size={VerticalTitleTextSize.Small}
                            body={VERTICAL_TITLE_INFO.body}
                        >
                            <Actions>
                                <Link
                                    href="https://airtable.com/appQqzg74YoTqK3Ht/pagSAWuqfqh3qIDg1/form"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button
                                        variant={ButtonVariant.Primary}
                                        text="Apply now"
                                        icon={<ArrowTopRight />}
                                    />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
                {/* <Banner
                    title={BANNER_INFO.title}
                    subtitle={BANNER_INFO.subtitle}
                    actions={
                        <Button
                            variant={ButtonVariant.Primary}
                            text="Register Now"
                            icon={<ArrowTopRight />}
                        />
                    }
                /> */}
            </div>
        </section>
    );
}
