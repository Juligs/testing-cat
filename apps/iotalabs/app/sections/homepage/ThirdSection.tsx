import { DecoratedBox, TwoColumnsImageTemplate } from '@components';

const TEXT = 'We’re not only building a network; we’re driving the success of it.';

export function ThirdSection({ id }: { id: string }) {
    return (
        <DecoratedBox topCornerFill="text-labs-primary-70" bottomCornerFill="text-labs-primary-100">
            <section className="w-full bg-labs-neutral-10" id={id}>
                <div className="container py-10 md:py-14 lg:py-20 flex justify-center text-center">
                    <TwoColumnsImageTemplate image="/next.svg">
                        <div className="text-headline-sm text-labs-neutral-80 max-w-xl text-left">
                            {TEXT}
                        </div>
                    </TwoColumnsImageTemplate>
                </div>
            </section>
        </DecoratedBox>
    );
}
