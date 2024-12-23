const extractUnixFromUrl = (url: string): number | null => {
    // eg in url https://v5.airtableusercontent.com/v3/u/36/36/1734098400000/VO657ubnR3T8S-40AzhN2Q/YftPqFRem5YnUpHiFoTQx_tIDMmKSlRlayDXVf-50-GZP7JSEUJUiolGU7u3257s-b_GlScS8cR5huje_a2pZIVAWNbCSbhXaQYRin_Is6EE2yZxanW8oD8_7xhfearkESyEUOTzuIEBAX7EA_mHnU33ISc2fZ-SHzGCYsuX2js/6VR1V4wazAR0hK0fOMp2007eiOulPMd5ehbaB38hkUA
    // the unix timestamp is 1734098400000
    const pattern = /(?<=\/v\d+\/u\/\d+\/\d+\/)\d+/;
    const unixMatch = url.match(pattern);
    return unixMatch?.[0] ? parseInt(unixMatch[0]) : null;
};

const isUnixValid = (unix: number): boolean => {
    return unix > Date.now();
};

export async function checkInvalidImageUrlsAndRevalidate(
    imageUrls: string[],
    fetchData: () => Promise<any>,
    revalidate: () => Promise<void>,
): Promise<any> {
    const checkInvalidUrls = await Promise.all(
        imageUrls
            .map((url) => url.trim())
            .filter((url) => url.startsWith('http'))
            .map((url) => {
                if (url) {
                    const unixTimestamp = extractUnixFromUrl(url);
                    return !(unixTimestamp !== null && isUnixValid(unixTimestamp));
                } else {
                    return true;
                }
            }),
    );
    if (checkInvalidUrls.some(Boolean)) {
        console.log('Invalid image URLs found, revalidating data');
        await revalidate();
        return await fetchData();
    }
    return null;
}
