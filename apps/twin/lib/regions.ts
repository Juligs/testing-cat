export const regionCodes = ['ke', 'global'] as const;

export type RegionCode = (typeof regionCodes)[number];

export const defaultRegion: RegionCode = 'ke';

interface RegionProfile {
    pilots: string[];
    localSignals: string[];
    adaptationPoints: string[];
}

const regionProfiles: Record<RegionCode, RegionProfile> = {
    ke: {
        pilots: ['mombasaPort', 'tradeFinance', 'certificateFlow'],
        localSignals: ['eastAfricanCorridor', 'publicPrivatePartners', 'smeExporters'],
        adaptationPoints: ['englishUi', 'kenyanWorkflows', 'localPartnerships'],
    },
    global: {
        pilots: ['documentTokenization', 'crossBorderVisibility'],
        localSignals: ['crossBorderData', 'documentAuthenticity', 'openNetworkDesign'],
        adaptationPoints: ['languageFallbacks', 'regionalContentRules', 'sharedCorePlatform'],
    },
};

export function isValidRegion(value: string): value is RegionCode {
    return regionCodes.includes(value as RegionCode);
}

export function getRegionProfile(region: RegionCode) {
    return regionProfiles[region];
}
