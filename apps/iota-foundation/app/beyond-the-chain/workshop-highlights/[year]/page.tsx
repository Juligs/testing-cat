import { FetchWorkshopPage } from '@sections';

export default async function Page(props: { params: Promise<{ year: string }> }) {
    const params = await props.params;
    return <FetchWorkshopPage year={params.year} />;
}
