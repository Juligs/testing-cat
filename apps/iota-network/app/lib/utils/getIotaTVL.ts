export interface IotaTVLProps {
    tvl: number | string;
}

export async function getIotaTVL(): Promise<IotaTVLProps> {
    const res = await fetch('https://api.llama.fi/v2/chains');
    const chains: { name: string; tvl: number }[] = await res.json();
    const iota = chains.find((chain) => chain.name.toLowerCase().includes('iota'));
    if (!iota) {
        throw new Error('IOTA-EVM not found');
    }
    const formattedTVL = new Intl.NumberFormat('en-US', {
        notation: 'compact',
        currency: 'USD',
        style: 'currency',
        maximumFractionDigits: 1,
    }).format(iota.tvl);
    return { tvl: formattedTVL };
}
