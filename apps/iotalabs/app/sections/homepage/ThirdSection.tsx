import { DecoratedBox, TwoColumnsImageTemplate } from '@components';

const TEXT = 'We’re not only building a network; we’re driving the success of it.';

export function ThirdSection({ id }: { id: string }) {
    return (
        <DecoratedBox topCornerFill="text-labs-primary-70" bottomCornerFill="text-labs-primary-100">
            <section className="w-full bg-labs-neutral-10" id={id}>
                <div className="container py-20 md:py-16 xl:py-20 flex justify-center text-center">
                    <TwoColumnsImageTemplate image="/homepage/third-section.svg">
                        <div className="text-headline-sm text-labs-neutral-80 max-w-sm lg:max-w-xl text-center xs:text-left">
                            {TEXT}
                        </div>
                    </TwoColumnsImageTemplate>
                </div>
            </section>
        </DecoratedBox>
    );
}
