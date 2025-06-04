import { EvmTooling, MagicSmartContracts, TransferAndTradeBridgelessly } from '@repo/icons';

export const UNLOCK_VERTICAL_TITLE = {
    title: 'Unlocking Smart Contract Innovation',
    body: 'The first fully EVM-compatible smart contract chain on the IOTA Mainnet, IOTA EVM enables scalable, fast and secure smart contracts.',
};

export const UNLOCK_IMAGE_CARD_CONTENT = [
    {
        overline: 'Native Randomness',
        title: 'Fair and Secure',
        image: '/products/evm/unlock/fair_and_secure.png',
    },
    {
        overline: 'Parallel Processing',
        title: 'Scalable and Composable',
        image: '/products/evm/unlock/scalable_and_composable.png',
    },
    {
        overline: 'Solidity Smart Contracts',
        title: 'Seamless Interoperability',
        image: '/shared/seamless.png',
    },
];

export const UNLOCK_ICON_CONTENT = [
    {
        icon: <MagicSmartContracts />,
        title: 'Magic Smart Contracts',
        body: 'Enable chains to interact and access functionalities beyond their standard capabilities for seamless L1-L2 asset transfers.',
    },
    {
        icon: <TransferAndTradeBridgelessly />,
        title: 'Transfer and Trade Bridgelessly',
        body: 'Trade safely: Convert smart contract tokens to native tokens effortlessly, and vice versa.',
    },
    {
        icon: <EvmTooling />,
        title: 'EVM Tooling',
        body: 'Fully compatible with EVM tooling like HardHat and MetaMask; upcoming libraries enable Mainnet interoperability features like automatic wrapping and bridging of ECR tokens.',
    },
];
