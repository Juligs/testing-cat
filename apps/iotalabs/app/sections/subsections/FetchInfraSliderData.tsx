import { fetchDataInfraSlider } from '@lib/airtable';
import { InfraSlider } from './InfraSlider';

export async function FetchInfraSliderData() {
    const dataInfraSlider = (await fetchDataInfraSlider()) || [];
    const hasInfraSliderData = dataInfraSlider.length > 0 ? true : null;
    return (
        <>
            {hasInfraSliderData ? (
                <div className="flex flex-col gap-12">
                    <InfraSlider data={dataInfraSlider} />
                </div>
            ) : null}
        </>
    );
}
