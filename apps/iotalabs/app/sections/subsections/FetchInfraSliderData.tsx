import { fetchDataInfraSlider } from '@lib/airtable';
import { InfraSlider } from './InfraSlider';

export async function FetchInfraSliderData() {
    const dataInfraSlider = (await fetchDataInfraSlider()) || [];

    return <InfraSlider data={dataInfraSlider} />;
}
