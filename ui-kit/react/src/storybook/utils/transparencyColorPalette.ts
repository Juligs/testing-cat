import { TRANSPARENCY_COLORS } from '../../lib/constants/colors.constants';

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
