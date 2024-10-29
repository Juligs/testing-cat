export const IOTALABS_COLOR_PALETTE = {
    'labs-primary': {
        0: '#000000',
        5: '#005427',
        10: '#00712f',
        20: '#08a139',
        30: '#08bd3e',
        40: '#14d731',
        50: '#1fe61c',
        60: '#5cf259',
        70: '#84ff81',
        80: '#b0fdb5',
        90: '#d1fad4',
        100: '#ffffff',
    },
    'labs-secondary': {
        0: '#000000',
        5: '#270650',
        10: '#3e1d67',
        20: '#492872',
        30: '#56357f',
        40: '#6f4e98',
        50: '#8766b0',
        60: '#a281cb',
        70: '#bd9ce6',
        80: '#d8b8ff',
        90: '#ebdaff',
        100: '#ffffff',
    },
    'labs-error': {
        0: '#000000',
        5: '#720909',
        10: '#a80b0b',
        20: '#cf1919',
        30: '#e73131',
        40: '#ff5050',
        50: '#ff8383',
        60: '#ffb1b1',
        70: '#ffd3d3',
        80: '#ffe9e9',
        90: '#fff8f8',
        100: '#ffffff',
    },
    'labs-neutral': {
        0: '#000000',
        4: '#0e0d16',
        6: '#13121b',
        10: '#1c1b24',
        12: '#201f28',
        20: '#302f38',
        30: '#45444d',
        40: '#45444d',
        50: '#7c777f',
        60: '#97929a',
        70: '#b0abb3',
        80: '#ccc7cf',
        90: '#d6d1d9',
        92: '#ece8ee',
        96: '#f5f3f7',
        98: '#fbfafc',
        100: '#ffffff',
    },
} as const;

const TRANSPARENCY_COLORS = {
    'transparency-primary': {
        4: '#05c500',
        8: '#05c500',
        12: '#05c500',
        16: '#05c500',
        24: '#05c500',
        32: '#05c500',
        48: '#05c500',
        56: '#05c500',
        80: '#05c500',
        100: '#05C500',
    },
    'transparency-white': {
        4: '#ffffff',
        8: '#ffffff',
        12: '#ffffff',
        16: '#ffffff',
        24: '#ffffff',
        32: '#ffffff',
        48: '#ffffff',
        56: '#ffffff',
        80: '#ffffff',
        100: '#ffffff',
    },
    'transparency-black': {
        4: '#000000',
        8: '#000000',
        12: '#000000',
        16: '#000000',
        24: '#000000',
        32: '#000000',
        48: '#000000',
        56: '#000000',
        80: '#000000',
        100: '#000000',
    },
} as const;

const addHexOpacity = (hex: string, opacity: number) => {
    const opacityHex = Math.round(opacity * 255)
        .toString(16)
        .padStart(2, '0');
    return `${hex}${opacityHex}`;
};

export const transparencyColorPalette: Partial<typeof TRANSPARENCY_COLORS> = Object.keys(
    TRANSPARENCY_COLORS,
).reduce((acc, color) => {
    const colorShades = TRANSPARENCY_COLORS[color as keyof typeof TRANSPARENCY_COLORS];
    const colorPalette = Object.entries(colorShades).reduce((acc, [shade, hex]) => {
        const color = addHexOpacity(hex, Number(shade) / 100);
        return {
            ...acc,
            [shade]: color,
        };
    }, {});
    return {
        ...acc,
        [color]: colorPalette,
    };
}, {});
