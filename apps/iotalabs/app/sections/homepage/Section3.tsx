import { TwoColumnsImageTemplate } from '@repo/shared';
import { DecoratedBox } from '@components';

const TEXT = 'Empowering IOTA - Unleashing Ecosystem Growth';

export function Section3({ id }: { id: string }) {
    return (
        <DecoratedBox topCornerFill="text-labs-primary-70" bottomCornerFill="text-labs-primary-100">
            <section className="w-full bg-labs-neutral-10" id={id}>
                <div className="container py-20 md:py-16 xl:py-20 flex justify-center text-center">
                    <TwoColumnsImageTemplate image="/homepage/section3.svg">
                        <div className="text-headline-sm text-labs-neutral-80 max-w-sm lg:max-w-xl text-center xs:text-left">
                            {TEXT}
                        </div>
                    </TwoColumnsImageTemplate>
                </div>
            </section>
        </DecoratedBox>
    );
}
