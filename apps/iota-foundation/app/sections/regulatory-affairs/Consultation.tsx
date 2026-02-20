import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle } from 'react-ui-kit';

export function Consultation({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-color-gradient"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/regulatory-affairs/consultation.png">
                    <div className="sm:pl-[92px] lg:pl-[102px] text-center">
                        <VerticalTitle
                            title="Consultation"
                            subtitle="Public Dialogue And Communication"
                            body="Our participation in regulatory events helps foster understanding about issues related to DLT and blockchain"
                        />
                    </div>
                </TwoColumnsImageTemplate>
            </div>
        </section>
    );
}
