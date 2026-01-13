import { ButtonVariant } from 'react-ui-kit';
import { SectionTabs } from '../SectionTabs';
import { useState } from 'react';

export function useMainnetEvmTab(defaultTab: 'mainnet' | 'evm' = 'mainnet') {
    const [activeTab, setActiveTab] = useState<'mainnet' | 'evm'>(defaultTab);
    const isMainnet = activeTab === 'mainnet';

    return {
        activeTab,
        isMainnet,
        setActiveTab,
    };
}

interface MainnetTrustFrameworkTabsProps {
    activeTab: 'mainnet' | 'evm';
    onChange: (tab: 'mainnet' | 'evm') => void;
    mainnetTitle?: string;
    evmTitle?: string;
    sectionTitle: string;
}

export function MainnetTrustFrameworkTabs({
    activeTab,
    onChange,
    mainnetTitle = 'Mainnet',
    evmTitle = 'EVM',
    sectionTitle,
}: MainnetTrustFrameworkTabsProps) {
    return (
        <SectionTabs
            titleProps={{ title: sectionTitle }}
            content={[
                {
                    text: `IOTA ${mainnetTitle}`,
                    onClick: () => onChange('mainnet'),
                    variant:
                        activeTab === 'mainnet' ? ButtonVariant.Primary : ButtonVariant.Secondary,
                },
                {
                    text: `IOTA ${evmTitle}`,
                    onClick: () => onChange('evm'),
                    variant: activeTab === 'evm' ? ButtonVariant.Primary : ButtonVariant.Secondary,
                },
            ]}
        />
    );
}
