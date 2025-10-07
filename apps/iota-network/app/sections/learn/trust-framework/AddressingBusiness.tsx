import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { IconContent, VerticalTitle } from 'react-ui-kit';
import {
    SOLVING_RECURRING_ICON_CONTENT,
    SOLVING_RECURRING_VERTICAL_TITLE_CONTENT,
} from './constants';

export function AddressingBusiness({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-12">
                <TwoColumnsImageTemplate image="/learn/trust-framework/solving.png">
                    <VerticalTitle {...SOLVING_RECURRING_VERTICAL_TITLE_CONTENT} />
                </TwoColumnsImageTemplate>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-6">
                    {SOLVING_RECURRING_ICON_CONTENT.map((data, index) => (
                        <IconContent
                            key={index}
                            title={data.title}
                            body={data.body}
                            icon={data.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
