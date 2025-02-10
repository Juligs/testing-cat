import { BaseSectionProps } from '../../interfaces';
import {
    MULTIKNIP_DIGITAL_WALLET_ICON_CONTENT,
    MULTIKNIP_DIGITAL_WALLET_VERTICAL_TITLE_CONTENT,
} from './constants';
import { VerticalTitleAndGrid } from '../../components';

export function MultiKnipDigitalWallet({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <VerticalTitleAndGrid
                image="/shared/showcases/digital_wallet.png"
                verticalTitle={MULTIKNIP_DIGITAL_WALLET_VERTICAL_TITLE_CONTENT}
                iconContent={MULTIKNIP_DIGITAL_WALLET_ICON_CONTENT}
            />
        </section>
    );
}
