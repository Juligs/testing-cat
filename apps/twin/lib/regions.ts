export const regionCodes = ['ke', 'uk', 'fr', 'global'] as const;

export type RegionCode = (typeof regionCodes)[number];

export const defaultRegion: RegionCode = 'global';
export const regionCookieName = 'twin-region';
export const regionCookieMaxAge = 60 * 60 * 24 * 30;

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
    uk: {
        pilots: ['portCommunity', 'complianceExchange', 'documentTokenization'],
        localSignals: ['tradeDigitization', 'publicPrivatePartners', 'documentAuthenticity'],
        adaptationPoints: ['englishUi', 'regionalContentRules', 'sharedCorePlatform'],
    },
    fr: {
        pilots: ['certificateFlow', 'complianceExchange', 'crossBorderVisibility'],
        localSignals: ['crossBorderData', 'documentAuthenticity', 'publicPrivatePartners'],
        adaptationPoints: ['languageFallbacks', 'regionalContentRules', 'sharedCorePlatform'],
    },
    global: {
        pilots: ['documentTokenization', 'crossBorderVisibility'],
        localSignals: ['crossBorderData', 'documentAuthenticity', 'openNetworkDesign'],
        adaptationPoints: ['languageFallbacks', 'regionalContentRules', 'sharedCorePlatform'],
    },
};

const countryToRegionMap: Partial<Record<string, RegionCode>> = {
    KE: 'ke',
    GB: 'uk',
    UK: 'uk',
    FR: 'fr',
};

export function isValidRegion(value: string): value is RegionCode {
    return regionCodes.includes(value as RegionCode);
}

export function getRegionProfile(region: RegionCode) {
    return regionProfiles[region];
}

export function getRegionFromCountry(countryCode?: string | null): RegionCode | undefined {
    if (!countryCode) {
        return undefined;
    }

    return countryToRegionMap[countryCode.toUpperCase()];
}

export function resolveRegion(
    regionParam?: string | null,
    regionCookie?: string | null,
    detectedCountry?: string | null,
): RegionCode {
    if (regionParam && isValidRegion(regionParam)) {
        return regionParam;
    }

    if (regionCookie && isValidRegion(regionCookie)) {
        return regionCookie;
    }

    const detectedRegion = getRegionFromCountry(detectedCountry);

    if (detectedRegion) {
        return detectedRegion;
    }

    return defaultRegion;
}
