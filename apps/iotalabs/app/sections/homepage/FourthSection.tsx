import { Actions, Button, ButtonVariant, VerticalTitle, VerticalTitleTextSize } from 'react-ui-kit';
import { ArrowTopRight } from '@repo/icons';
import Image from 'next/image';

const VERTICAL_TITLE_INFO = {
    title: 'A New Era of Tokenization',
    subtitle:
        'Real world meets Web3. IOTA EVM is your new home to create products that reach the next billion users.',
    body: 'A fusion of the IOTA flexible and highly interoperable structure with an advanced EVM-compatible smart contract chain, ushering in a new era for seamlessly tokenizing real-world assets.',
};

export function FourthSection({ id }: { id: string }) {
    return (
        <section className="w-full bg-labs-neutral-100" id={id}>
            <div className="container py-30 flex flex-col gap-30 justify-center items-center">
                <div className="max-w-80 md:max-w-2xl">
                    <VerticalTitle
                        isCentered
                        title={VERTICAL_TITLE_INFO.title}
                        size={VerticalTitleTextSize.Medium}
                        subtitle={VERTICAL_TITLE_INFO.subtitle}
                        body={VERTICAL_TITLE_INFO.body}
                    >
                        <Actions>
                            <Button variant={ButtonVariant.Primary}>
                                Get Started
                                <ArrowTopRight className="h-[20px] w-[20px]" />
                            </Button>
                        </Actions>
                    </VerticalTitle>
                </div>
                <Image src="/homepage/fourth-section.png" alt="Image" width={1200} height={515} />
            </div>
        </section>
    );
}
