import { Faqs } from './components';
import { BaseSectionProps } from '@repo/shared/interfaces';

const DISCLAIMER_TEXT = {
    title: 'Disclaimer',
    text: 'The displayed staking rewards are theoretical estimates and not guaranteed. Actual rewards may vary due to protocol dynamics, validation selection, network conditions, or external factors. Only a subset of validators per epoch might receive rewards, which could be lower than the maximum rate. The information on this page is for informational purposes only and does not constitute financial or investment advice.',
};

export function FAQs({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="container w-full flex flex-col gap-12"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <h2 className="text-darkest text-headline-sm">Questions About Staking IOTA</h2>
            <div className="prose prose-accordion max-w-none">
                <Faqs />
            </div>
            <div className="flex flex-col text-light">
                <p className="text-label-md">{DISCLAIMER_TEXT.title}</p>
                <p className="text-body-sm">{DISCLAIMER_TEXT.text}</p>
            </div>
        </section>
    );
}
