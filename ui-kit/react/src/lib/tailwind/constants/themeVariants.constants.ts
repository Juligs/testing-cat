import plugin from 'tailwindcss/plugin';

export const themeVariants = plugin(({ addVariant }) => {
    addVariant('labs', '.labs &');
    addVariant('network', '.network &');
    addVariant('foundation', '.foundation &');
});
