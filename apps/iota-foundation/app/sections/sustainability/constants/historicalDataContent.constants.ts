import { CtaCard, TitleTextSize, VerticalTitle } from 'react-ui-kit';

export const HISTORICAL_DATA_VERTICAL_TITLE: React.ComponentProps<typeof VerticalTitle> = {
    title: 'Historical Data',
    size: TitleTextSize.Small,
    isCentered: true,
};

export const MICA_INDICATORS_CARD: React.ComponentProps<typeof CtaCard> = {
    title: 'Sustainability Indicators',
    subtitle:
        "ESMA's Final RTS provides a set of required and voluntary sustainability indicators.¹",
    body: 'MiCA (Markets in Crypto-Asset) Regulation defines roles and responsibilities for entities in the crypto ecosystem. Among other requirements, CASPs (Crypto-Asset Service Providers) and Crypto-Asset Issuers are required to disclose the sustainability metrics of the currencies they offer. If you are a CASP, CCRI may help you by providing respective data for your website or in your application.',
    image: '/sustainability/mica_indicators.png',
};
