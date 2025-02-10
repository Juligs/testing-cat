import { BaseSectionProps } from '../../interfaces';
import { VerticalTitleAndGrid } from '../../components';
import { KYC_SCALABLE_ICON_CONTENT, KYC_SCALABLE_VERTICAL_TITLE_CONTENT } from './constants';

export function KYCDeFi({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <VerticalTitleAndGrid
                image="/shared/showcases/kyc_defi.png"
                verticalTitle={KYC_SCALABLE_VERTICAL_TITLE_CONTENT}
                iconContent={KYC_SCALABLE_ICON_CONTENT}
            />
        </section>
    );
}
