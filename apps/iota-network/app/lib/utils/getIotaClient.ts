import { IotaClient } from '@iota/iota-sdk/client';

export function getIotaClient(): IotaClient {
    const rpcUrl = process.env.IOTA_NETWORK_INDEXER_URL;
    if (!rpcUrl) {
        throw new Error('missing rpcUrl');
    }
    const client = new IotaClient({ url: rpcUrl });
    return client;
}
