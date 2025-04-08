const iotaPriceUrl = process.env.IOTA_PRICE_URL;

export async function getIotaPrice(): Promise<number | null> {
    try {
        if (!iotaPriceUrl) {
            throw new Error('iotaPriceUrl is not defined');
        }
        const response = await fetch(iotaPriceUrl);
        const data = await response.json();
        return data.price;
    } catch (error) {
        console.error('error getIotaPrice :', error);
        return null;
    }
}
