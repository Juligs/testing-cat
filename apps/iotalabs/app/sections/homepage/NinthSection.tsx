import { TwoColumnsImageTemplate } from '@components';
import { Actions, Button, ButtonVariant, VerticalTitle, VerticalTitleTextSize } from 'react-ui-kit';
import { ArrowTopRight } from '@repo/icons';
import { Banner } from '@components/banner';

const VERTICAL_TITLE_INFO = {
    title: 'Build with IOTA Labs',
    body: 'Connecting innovate Web3 minds and builders with a prime support network for building your decentralized innovations.',
};
const BANNER_INFO = {
    title: 'Are you building on IOTA?',
    subtitle: 'Register your application and get featured on iotalabs and the official website',
};
export function NinthSection({ id }: { id: string }) {
    return (
        <section className="w-full bg-labs-neutral-100" id={id}>
            <div className="container py-14 md:py-20 lg:py-30 flex flex-col justify-center text-center gap-y-14 md:gap-y-20 lg:gap-y-30">
                <TwoColumnsImageTemplate reverse image="/homepage/ninth-section.svg">
                    <VerticalTitle
                        title={VERTICAL_TITLE_INFO.title}
                        size={VerticalTitleTextSize.Small}
                        body={VERTICAL_TITLE_INFO.body}
                    >
                        <Actions>
                            <Button variant={ButtonVariant.Primary}>
                                Button
                                <ArrowTopRight className="h-[20px] w-[20px]" />
                            </Button>
                        </Actions>
                    </VerticalTitle>
                </TwoColumnsImageTemplate>
                <Banner
                    title={BANNER_INFO.title}
                    subtitle={BANNER_INFO.subtitle}
                    actions={
                        <Button variant={ButtonVariant.Primary}>
                            Register Now
                            <ArrowTopRight className="h-[20px] w-[20px]" />
                        </Button>
                    }
                />
            </div>
        </section>
    );
}
