import { IOTA_DECIMALS } from '@iota/iota-sdk/utils';
import { CoinFormat } from '@lib/enums';
import { getIotaPrice } from './getIotaPrice';

type IotaBalanceInput = bigint | number | string;
interface FormatIotaCoinProps {
    balance: IotaBalanceInput;
    format: CoinFormat;
    showSign: boolean;
}
function normalizeIotaBalance(balance: IotaBalanceInput): number {
    return Number(balance) / 10 ** IOTA_DECIMALS;
}

export function FormatIotaCoin({
    balance,
    format = CoinFormat.ROUNDED,
    showSign,
}: FormatIotaCoinProps) {
    if (balance === null || balance === undefined) return '0';
    const balanceNumber = normalizeIotaBalance(balance);
    let formattedBalance = '';

    if (format === CoinFormat.COMPACT) {
        formattedBalance = new Intl.NumberFormat('en-US', {
            notation: 'compact',
            maximumFractionDigits: 2,
        }).format(balanceNumber);
    } else if (format === CoinFormat.FULL) {
        formattedBalance = balanceNumber.toFixed(IOTA_DECIMALS);
    } else {
        formattedBalance = balanceNumber.toFixed(3);
    }

    if (showSign && balanceNumber > 0) {
        formattedBalance = `+${formattedBalance}`;
    }

    return formattedBalance;
}

export async function convertIotaBalanceToUsd(balance: IotaBalanceInput): Promise<string | null> {
    const iotaPrice = await getIotaPrice();
    if (!iotaPrice) return null;

    const iotaAmount = normalizeIotaBalance(balance);
    const usdValue = iotaAmount * iotaPrice;

    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 2,
    }).format(usdValue);
}
