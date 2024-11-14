export async function checkIfInvalidImageUrls(imageUrls: string[]): Promise<boolean> {
    const invalidUrls = await Promise.all(
        imageUrls
            .map((url) => url.trim())
            .filter((url) => url.startsWith('http'))
            .map(async (url) => {
                return !(await fetch(url, { method: 'HEAD', cache: 'no-store' }).then(
                    (res) => res.ok,
                ));
            }),
    );

    return invalidUrls.includes(true);
}
