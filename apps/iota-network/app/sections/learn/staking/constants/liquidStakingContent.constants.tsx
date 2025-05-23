import {
    AnyoneCanIssueAssets,
    AssetTokenization,
    IroncladSecurity,
    ProofOfStake,
} from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';

export const LIQUID_STAKING_VERTICAL_TITLE_CONTENT = {
    title: 'Liquid Staking IOTA',
    subtitle: "IOTA's first liquid staking token offers a more rewarding experience",
    body: 'With stIOTA, your staked assets remain accessible and tradable at all times, giving you unmatched freedom to engage with the IOTA ecosystem on your terms. No lockups. No waiting. Just seamless staking with full control.',
    size: TitleTextSize.Small,
};

export const LIQUID_STAKING_ICON_CONTENT = [
    {
        icon: <AnyoneCanIssueAssets />,
        title: 'Instantly stake & unstake',
        body: 'stIOTA staking is as fast and easy as a swap. Trade it anytime to enter or exit staking',
    },
    {
        icon: <ProofOfStake />,
        title: 'Easy to send & trade',
        body: 'Use stIOTA on your favorite wallets and exchanges',
    },
    {
        icon: <IroncladSecurity />,
        title: 'Rest easy with ironclad security',
        body: "stIOTA's institutional-grade security has undergone Hacken audit",
    },
    {
        icon: <AssetTokenization />,
        title: 'Immediate redemption',
        body: 'Retain instant access to your staked IOTA tokens with no waiting period to unstake',
    },
];
