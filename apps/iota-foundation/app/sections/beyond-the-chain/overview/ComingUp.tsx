import { BaseSectionProps } from '@repo/shared/interfaces';
import { FetchNewsSliderData } from './subsections/FetchNewsSliderData';

export function ComingUp({ id, navbarColorScheme }: BaseSectionProps) {
    return <FetchNewsSliderData id={id} navbarColorScheme={navbarColorScheme} />;
}
