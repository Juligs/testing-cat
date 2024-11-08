import { fetchDataGrantsSlider } from '@lib/airtable';
import { GrantSlider } from './GrantsSlider';

export async function FetchGrantsSliderData() {
    const dataGrantSlider = await fetchDataGrantsSlider();
    const hasGrantSliderData = dataGrantSlider.length > 0 ? true : null;

    return (
        <>
            {hasGrantSliderData ? (
                <div className="flex flex-col gap-12">
                    <GrantSlider data={dataGrantSlider} />
                </div>
            ) : null}
        </>
    );
}
