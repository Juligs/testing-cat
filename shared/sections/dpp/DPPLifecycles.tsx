import { BaseSectionProps } from '../../interfaces';
import { VerticalTitleAndGrid } from '../../components';
import { DPP_SCALABLE_ICON_CONTENT, DPP_SCALABLE_VERTICAL_TITLE_CONTENT } from './constants';

export function DPPLifecycles({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <VerticalTitleAndGrid
                image="/shared/showcases/lifecycles.png"
                verticalTitle={DPP_SCALABLE_VERTICAL_TITLE_CONTENT}
                iconContent={DPP_SCALABLE_ICON_CONTENT}
            />
        </section>
    );
}
