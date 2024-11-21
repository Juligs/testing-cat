export async function checkInvalidImageUrlsAndRevalidate(
    imageUrls: string[],
    fetchData: () => Promise<any>,
    revalidate: () => Promise<void>,
): Promise<any> {
    const checkInvalidUrls = await Promise.all(
        imageUrls
            .map((url) => url.trim())
            .filter((url) => url.startsWith('http'))
            .map(async (url) => {
                const response = await fetch(url, { method: 'HEAD', cache: 'no-store' });
                return !response.ok;
            }),
    );

    if (checkInvalidUrls.some(Boolean)) {
        await revalidate();
        return fetchData();
    }

    return null;
}
