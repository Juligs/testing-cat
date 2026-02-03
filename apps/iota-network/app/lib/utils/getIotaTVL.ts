import { formatCoin } from '@repo/shared/utils';

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
    const formattedTVL = formatCoin(iota.tvl, true);
    return { tvl: formattedTVL };
}
